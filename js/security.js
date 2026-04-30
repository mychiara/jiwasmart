/**
 * NurseJiwa - Sistem Pertahanan Siber Client-Side
 * Mencegah pencurian akses Source Code secara esensial
 */

(function () {
  // 1. Mencegah Klik Kanan (Context Menu)
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // 2. Mencegah Shortcut Keyboard Developer Tools
  document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
    }
    // Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "I" || e.key === "i" || e.keyCode === 73)
    ) {
      e.preventDefault();
    }
    // Ctrl+Shift+C (Inspect Element)
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "C" || e.key === "c" || e.keyCode === 67)
    ) {
      e.preventDefault();
    }
    // Ctrl+Shift+J (Console)
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "J" || e.key === "j" || e.keyCode === 74)
    ) {
      e.preventDefault();
    }
    // Ctrl+U (View Source)
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === "U" || e.key === "u" || e.keyCode === 85)
    ) {
      e.preventDefault();
    }
  });

  // 3. Debugger Trap (Anti-Debugging)
  setInterval(function () {
    const detectDevTool = new Function("debugger");
    detectDevTool();
  }, 100);

  // 4. Deteksi ukuran layar (jika devtool dibuka ke samping/bawah)
  let devtools = function () {};
  devtools.toString = function () {
    return "devtools";
  };

  // 5. Pencegahan Seleksi Text dan Drag Gambar
  document.addEventListener("selectstart", function (e) {
    // Izinkan seleksi khusus untuk input dan textarea
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });

  console.log(
    "%cSTOP!",
    "color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0 #000;",
  );
  console.log(
    "%cIni adalah fitur keamanan browser. Dilarang melakukan injeksi script atau pencurian hak kekayaan intelektual (HAKI) NurseJiwa.",
    "color: white; background: red; font-size: 16px; padding: 10px; border-radius: 5px;",
  );
})();
