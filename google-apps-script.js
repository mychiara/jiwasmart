/**
 * =========================================================
 * NurseJiwa - Google Apps Script License API
 * =========================================================
 *
 * STRUKTUR SPREADSHEET (Row 1 = Header):
 *   A: email | B: name | C: status | D: created | E: expiry | F: notes | G: device_id
 *
 * PETUNJUK SETUP:
 * 1. Buka Google Sheets baru → beri nama "NurseJiwa Licenses"
 * 2. Di row 1 (header), isi kolom:
 *    A1: email | B1: name | C1: status | D1: created | E1: expiry | F1: notes | G1: device_id
 * 3. Klik Extensions → Apps Script
 * 4. Hapus semua kode default, lalu paste seluruh kode ini
 * 5. Klik Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy URL deployment dan paste ke admin.html → API URL
 *
 * PENTING: Setiap kali edit kode, buat deployment BARU agar perubahan berlaku.
 * =========================================================
 */

const SHEET_NAME = "Sheet1";

function getSheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
}

/**
 * Handle GET requests
 * ?action=list                       → list all licenses
 * ?action=validate&key=EMAIL&device=ID → validate email + bind device
 */
function doGet(e) {
  const action = e.parameter.action || "list";
  try {
    if (action === "validate") {
      return handleValidate(e.parameter.key, e.parameter.device || "");
    } else if (action === "list") {
      return handleList();
    } else {
      return jsonResponse({ success: false, error: "Invalid action" });
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

/**
 * Handle POST requests
 * action: add | update | delete | reset_device
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    if (action === "add") {
      return handleAdd(data);
    } else if (action === "update") {
      return handleUpdate(data);
    } else if (action === "delete") {
      return handleDelete(data);
    } else if (action === "reset_device") {
      return handleResetDevice(data);
    } else {
      return jsonResponse({ success: false, error: "Invalid action" });
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

/**
 * List all licenses
 * Columns: A=email, B=name, C=status, D=created, E=expiry, F=notes, G=device_id
 */
function handleList() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  const licenses = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0]) continue;
    licenses.push({
      id: i + 1,
      email: row[0],
      name: row[1],
      status: row[2],
      created: row[3] ? new Date(row[3]).toISOString() : "",
      expiry: row[4] ? new Date(row[4]).toISOString() : "",
      notes: row[5],
      device_id: row[6] || "",
    });
  }

  return jsonResponse({ success: true, data: licenses });
}

/**
 * Validate a user by email + device binding
 * - First login: device_id is saved to the spreadsheet
 * - Subsequent logins: device_id must match
 */
function handleValidate(email, deviceId) {
  if (!email) {
    return jsonResponse({
      success: false,
      valid: false,
      message: "Email tidak boleh kosong.",
    });
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  const emailLower = email.toLowerCase().trim();

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowEmail = String(row[0]).toLowerCase().trim();

    if (rowEmail === emailLower) {
      const status = String(row[2]).toLowerCase().trim();

      // Check if active
      if (status !== "active" && status !== "aktif") {
        return jsonResponse({
          success: true,
          valid: false,
          message: "Akun ditemukan tetapi tidak aktif. Status: " + row[2],
        });
      }

      // Check expiry
      if (row[4]) {
        const expiryDate = new Date(row[4]);
        if (new Date() > expiryDate) {
          sheet.getRange(i + 1, 3).setValue("expired");
          return jsonResponse({
            success: true,
            valid: false,
            message:
              "Lisensi sudah kadaluarsa pada " +
              expiryDate.toLocaleDateString("id-ID"),
          });
        }
      }

      // --- Device binding check ---
      const savedDeviceId = String(row[6] || "").trim();

      if (deviceId) {
        if (!savedDeviceId) {
          // First login — bind this device
          sheet.getRange(i + 1, 7).setValue(deviceId);
        } else if (savedDeviceId !== deviceId) {
          // Different device — reject
          return jsonResponse({
            success: true,
            valid: false,
            message:
              "Lisensi ini sudah terdaftar di perangkat lain. Hubungi admin untuk reset perangkat.",
          });
        }
        // Same device — OK, continue
      }

      // Valid!
      const expiry = row[4] ? new Date(row[4]).toISOString() : null;
      return jsonResponse({
        success: true,
        valid: true,
        message: "Selamat datang, " + (row[1] || "Pengguna") + "!",
        name: row[1],
        expiry: expiry,
      });
    }
  }

  return jsonResponse({
    success: true,
    valid: false,
    message: "Email tidak terdaftar dalam sistem.",
  });
}

/**
 * Add a new license
 * Expiry auto-calculated 1 year from creation.
 * Columns: A=email, B=name, C=status, D=created, E=expiry, F=notes, G=device_id (empty)
 */
function handleAdd(data) {
  const sheet = getSheet();
  const existing = sheet.getDataRange().getValues();
  const newEmail = String(data.email).toLowerCase().trim();

  for (let i = 1; i < existing.length; i++) {
    if (String(existing[i][0]).toLowerCase().trim() === newEmail) {
      return jsonResponse({
        success: false,
        error: "Email sudah terdaftar.",
      });
    }
  }

  const createdDate = new Date();
  const expiryDate = new Date(createdDate);
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  sheet.appendRow([
    newEmail,
    data.name || "",
    data.status || "active",
    createdDate.toISOString(),
    expiryDate.toISOString(),
    data.notes || "",
    "", // device_id — empty until first login
  ]);

  return jsonResponse({
    success: true,
    message:
      "Lisensi berhasil ditambahkan. Berlaku hingga " +
      expiryDate.toLocaleDateString("id-ID"),
  });
}

/**
 * Update an existing license
 * NOTE: Expiry and device_id are NOT updated on edit.
 */
function handleUpdate(data) {
  const sheet = getSheet();
  const rowId = data.id;

  if (!rowId) {
    return jsonResponse({
      success: false,
      error: "ID baris tidak ditemukan.",
    });
  }

  if (data.email) {
    const existing = sheet.getDataRange().getValues();
    const newEmail = String(data.email).toLowerCase().trim();

    for (let i = 1; i < existing.length; i++) {
      if (
        i + 1 !== rowId &&
        String(existing[i][0]).toLowerCase().trim() === newEmail
      ) {
        return jsonResponse({
          success: false,
          error: "Email sudah digunakan oleh entry lain.",
        });
      }
    }
    sheet.getRange(rowId, 1).setValue(newEmail);
  }

  if (data.name !== undefined) sheet.getRange(rowId, 2).setValue(data.name);
  if (data.status !== undefined) sheet.getRange(rowId, 3).setValue(data.status);
  if (data.notes !== undefined) sheet.getRange(rowId, 6).setValue(data.notes);

  return jsonResponse({
    success: true,
    message: "Data berhasil diperbarui.",
  });
}

/**
 * Reset device binding — allows user to login from a new device
 */
function handleResetDevice(data) {
  const sheet = getSheet();
  const rowId = data.id;

  if (!rowId) {
    return jsonResponse({
      success: false,
      error: "ID baris tidak ditemukan.",
    });
  }

  sheet.getRange(rowId, 7).setValue("");
  return jsonResponse({
    success: true,
    message:
      "Perangkat berhasil direset. Pengguna dapat login dari perangkat baru.",
  });
}

/**
 * Delete a license
 */
function handleDelete(data) {
  const sheet = getSheet();
  const rowId = data.id;

  if (!rowId) {
    return jsonResponse({
      success: false,
      error: "ID baris tidak ditemukan.",
    });
  }

  sheet.deleteRow(rowId);
  return jsonResponse({
    success: true,
    message: "Lisensi berhasil dihapus.",
  });
}

/**
 * Helper: JSON response
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
