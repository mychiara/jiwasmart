/**
 * JiwaCare - License Activation Module
 * Validates user access via registered email + device binding.
 */

window.initLicense = function () {
  const licenseScreen = document.getElementById("license-screen");
  const licenseForm = document.getElementById("license-form");
  const licenseInput = document.getElementById("license-key-input");
  const licenseError = document.getElementById("license-error");
  const licenseSubmitBtn = document.getElementById("license-submit-btn");
  const landingScreen = document.getElementById("landing-screen");
  const appContainer = document.querySelector(".app-container");
  const mobileHeader = document.querySelector(".mobile-header");

  if (!licenseScreen || !licenseForm) return;

  // --- Config ---
  const LICENSE_STORAGE_KEY = "nursejiwa_license";
  const LICENSE_EXPIRY_KEY = "nursejiwa_license_expiry";
  const LICENSE_NAME_KEY = "nursejiwa_license_name";
  const DEVICE_ID_KEY = "nursejiwa_device_id";
  const API_STORAGE_KEY = "nursejiwa_api_url";

  // --- Default API URL ---
  const GAS_API_URL =
    "https://script.google.com/macros/s/AKfycbybtD6BcIgcTfMuDSGlEfRC8c_K6AzlgbT4Ho3wc0sZkzRYiy8jy4ePHhzgenKhY29I/exec";

  function getApiUrl() {
    return localStorage.getItem(API_STORAGE_KEY) || GAS_API_URL;
  }

  // --- WhatsApp Admin ---
  const WA_ADMIN_NUMBER = "6285253470788";

  function buildWaResetLink(email) {
    const msg = `halo admin, Tolong reset lisensi NurseJiwa saya dengan email ${email} untuk pindah device, terimakasih`;
    return `https://wa.me/${WA_ADMIN_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function updateWaLink(email) {
    const waLink = document.getElementById("wa-admin-link");
    if (!waLink) return;
    if (email && email.includes("@")) {
      waLink.href = buildWaResetLink(email);
    }
  }

  // ===========================================================
  // Device Fingerprint — generates a unique ID per browser/device
  // ===========================================================
  function generateDeviceFingerprint() {
    const saved = localStorage.getItem(DEVICE_ID_KEY);
    if (saved) return saved;

    // Collect browser characteristics
    const components = [
      navigator.userAgent,
      navigator.language,
      screen.width + "x" + screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || "unknown",
      navigator.platform || "unknown",
      (navigator.deviceMemory || "unknown").toString(),
    ];

    // Simple hash function (djb2)
    const raw = components.join("|");
    let hash = 5381;
    for (let i = 0; i < raw.length; i++) {
      hash = ((hash << 5) + hash + raw.charCodeAt(i)) & 0xffffffff;
    }
    // Convert to alphanumeric string
    const deviceId =
      "DVC-" +
      Math.abs(hash).toString(36).toUpperCase() +
      "-" +
      Date.now().toString(36).toUpperCase();

    localStorage.setItem(DEVICE_ID_KEY, deviceId);
    return deviceId;
  }

  /**
   * Check if a valid license already exists in localStorage.
   */
  function hasValidLicense() {
    const savedEmail = localStorage.getItem(LICENSE_STORAGE_KEY);
    const expiry = localStorage.getItem(LICENSE_EXPIRY_KEY);

    if (!savedEmail) return false;

    if (expiry) {
      const expiryDate = new Date(expiry);
      if (new Date() > expiryDate) {
        localStorage.removeItem(LICENSE_STORAGE_KEY);
        localStorage.removeItem(LICENSE_EXPIRY_KEY);
        localStorage.removeItem(LICENSE_NAME_KEY);
        return false;
      }
    }

    return true;
  }

  /**
   * Validate email + device against Google Sheets API.
   */
  async function validateLicense(email) {
    if (!email || !email.trim()) {
      return { valid: false, message: "Email tidak boleh kosong." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return { valid: false, message: "Format email tidak valid." };
    }

    const apiUrl = getApiUrl();
    if (!apiUrl) {
      return {
        valid: false,
        message: "Sistem lisensi belum dikonfigurasi. Hubungi admin.",
      };
    }

    // Generate device fingerprint
    const deviceId = generateDeviceFingerprint();

    try {
      const res = await fetch(
        `${apiUrl}?action=validate&key=${encodeURIComponent(
          email.trim().toLowerCase(),
        )}&device=${encodeURIComponent(deviceId)}`,
      );
      const json = await res.json();

      if (json.success) {
        return {
          valid: json.valid,
          message:
            json.message ||
            (json.valid ? "Akun aktif!" : "Email tidak terdaftar."),
          name: json.name || "",
          expiry: json.expiry || null,
        };
      } else {
        return {
          valid: false,
          message: json.error || "Gagal memvalidasi akun.",
        };
      }
    } catch (err) {
      return {
        valid: false,
        message:
          "Tidak dapat terhubung ke server lisensi. Periksa koneksi internet Anda.",
      };
    }
  }

  /**
   * Activate the license and proceed to the app.
   */
  function activateLicense(email, result) {
    localStorage.setItem(LICENSE_STORAGE_KEY, email.trim().toLowerCase());

    if (result.expiry) {
      localStorage.setItem(LICENSE_EXPIRY_KEY, result.expiry);
    }

    if (result.name) {
      localStorage.setItem(LICENSE_NAME_KEY, result.name);
    }

    licenseScreen.classList.add("hidden");

    if (appContainer) appContainer.classList.remove("blur");
    if (mobileHeader) mobileHeader.style.visibility = "visible";

    if (typeof Swal !== "undefined") {
      Swal.fire({
        icon: "success",
        title: "Selamat Datang" + (result.name ? ", " + result.name : "") + "!",
        text: result.message,
        timer: 2500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
        background: "#f0fdf4",
        iconColor: "#22c55e",
      });
    }
  }

  /**
   * Show error on the license form.
   */
  function showLicenseError(message) {
    licenseError.innerHTML =
      '<i data-lucide="alert-circle" style="width:16px;height:16px;flex-shrink:0;"></i><span>' +
      message +
      "</span>";
    licenseError.style.display = "flex";
    licenseInput.classList.add("shake");
    setTimeout(() => licenseInput.classList.remove("shake"), 500);
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  /**
   * Show the license screen (skip if already licensed).
   */
  window.showLicenseScreen = function () {
    if (hasValidLicense()) {
      licenseScreen.style.display = "none";
      if (appContainer) appContainer.classList.remove("blur");
      if (mobileHeader) mobileHeader.style.visibility = "visible";
      return;
    }

    licenseScreen.style.display = "flex";
    licenseScreen.classList.remove("hidden");
    if (appContainer) appContainer.classList.add("blur");
    if (mobileHeader) mobileHeader.style.visibility = "hidden";

    setTimeout(() => {
      if (licenseInput) licenseInput.focus();
    }, 600);
  };

  /**
   * Deactivate / logout.
   */
  window.deactivateLicense = function () {
    if (typeof Swal !== "undefined") {
      Swal.fire({
        title: "Keluar dari Akun?",
        text: "Anda harus memasukkan email lagi untuk mengakses aplikasi.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Keluar",
        cancelButtonText: "Batal",
        confirmButtonColor: "#ef4444",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem(LICENSE_STORAGE_KEY);
          localStorage.removeItem(LICENSE_EXPIRY_KEY);
          localStorage.removeItem(LICENSE_NAME_KEY);
          window.location.reload();
        }
      });
    } else {
      localStorage.removeItem(LICENSE_STORAGE_KEY);
      localStorage.removeItem(LICENSE_EXPIRY_KEY);
      localStorage.removeItem(LICENSE_NAME_KEY);
      window.location.reload();
    }
  };

  /**
   * Get current license info
   */
  window.getLicenseInfo = function () {
    return {
      email: localStorage.getItem(LICENSE_STORAGE_KEY) || "",
      name: localStorage.getItem(LICENSE_NAME_KEY) || "",
      expiry: localStorage.getItem(LICENSE_EXPIRY_KEY) || null,
      deviceId: localStorage.getItem(DEVICE_ID_KEY) || "",
      isActive: hasValidLicense(),
    };
  };

  // --- Form Submit Handler ---
  licenseForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = licenseInput.value;
    licenseError.style.display = "none";

    licenseSubmitBtn.disabled = true;
    licenseSubmitBtn.innerHTML =
      '<div class="license-btn-spinner"></div> Memverifikasi...';

    try {
      const result = await validateLicense(email);

      if (result.valid) {
        activateLicense(email, result);
      } else {
        // If device-bound error, show WA link
        if (result.message && result.message.includes("perangkat lain")) {
          const waUrl = buildWaResetLink(email.trim().toLowerCase());
          showLicenseError(
            result.message +
              ' <a href="' +
              waUrl +
              '" target="_blank" rel="noopener" style="color:var(--primary);font-weight:600;text-decoration:underline;">Hubungi Admin via WA</a>',
          );
        } else {
          showLicenseError(result.message);
        }
      }
    } catch (err) {
      showLicenseError("Terjadi kesalahan. Silakan coba lagi.");
    }

    licenseSubmitBtn.disabled = false;
    licenseSubmitBtn.innerHTML =
      '<i data-lucide="log-in" style="width:20px;height:20px;"></i> Masuk';
    if (typeof lucide !== "undefined") lucide.createIcons();
  });

  // --- Clear error on input ---
  if (licenseInput) {
    licenseInput.addEventListener("input", () => {
      licenseError.style.display = "none";
      licenseInput.classList.remove("shake");
      // Update WA link with current email
      updateWaLink(licenseInput.value.trim());
    });
  }

  // --- Initial Check ---
  if (hasValidLicense()) {
    licenseScreen.style.display = "none";
  }
};
