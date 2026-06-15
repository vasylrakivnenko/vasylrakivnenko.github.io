/* Minimal JS: nav toggle, theme toggle, "copy message", and a small clock. */
(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("navList");
  const themeToggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");
  const localTime = document.getElementById("localTime");
  const contactForm = document.getElementById("contactForm");
  const formHelp = document.getElementById("formHelp");

  year.textContent = String(new Date().getFullYear());

  // Mobile nav
  function setNav(open) {
    navList.classList.toggle("show", open);
    navToggle.setAttribute("aria-expanded", String(open));
  }
  navToggle?.addEventListener("click", () => {
    const open = !navList.classList.contains("show");
    setNav(open);
  });
  navList?.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") setNav(false);
  });
  document.addEventListener("click", (e) => {
    if (!navList || !navToggle) return;
    if (navList.contains(e.target) || navToggle.contains(e.target)) return;
    setNav(false);
  });

  // Theme (persisted)
  const storageKey = "vr_theme";
  function applyTheme(theme) {
    if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
  }
  const saved = localStorage.getItem(storageKey);
  if (saved) applyTheme(saved);
  themeToggle?.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });

  // Clock (Menlo Park-ish: America/Los_Angeles)
  function tick() {
    try {
      const now = new Date();
      const s = new Intl.DateTimeFormat(undefined, {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      if (localTime) localTime.textContent = s;
    } catch {
      if (localTime) localTime.textContent = "—";
    }
  }
  tick();
  setInterval(tick, 15_000);

  // Contact form: copy-to-clipboard
  contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();

    const text = `From: ${email}\n\n${msg}`;
    try {
      await navigator.clipboard.writeText(text);
      formHelp.textContent = "Copied to clipboard ✅ Paste into an email or DM.";
    } catch {
      formHelp.textContent = "Couldn't access clipboard. Select and copy manually.";
      // Fallback: show prompt
      window.prompt("Copy this text:", text);
    }
  });
})();
