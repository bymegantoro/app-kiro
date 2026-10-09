/* hero.js — typewriter effect + floating particles */
(function () {
  /* ---------- Typewriter ---------- */
  const el = document.getElementById("typewriter");
  if (el) {
    const phrases = [
      "Full Stack AI Engineer",
      "Frontend Developer",
      "Backend Engineer",
      "AI Solutions Builder",
    ];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.textContent = phrases[0];
    } else {
      let p = 0, c = 0, deleting = false;
      const tick = () => {
        const word = phrases[p];
        c += deleting ? -1 : 1;
        el.textContent = word.slice(0, c);

        let delay = deleting ? 55 : 95;
        if (!deleting && c === word.length) {
          delay = 1600;
          deleting = true;
        } else if (deleting && c === 0) {
          deleting = false;
          p = (p + 1) % phrases.length;
          delay = 350;
        }
        setTimeout(tick, delay);
      };
      tick();
    }
  }

  /* ---------- Interactive 3D tilt on the profile photo ---------- */
  const photo = document.getElementById("heroPhoto");
  if (photo && window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const MAX = 14; // max tilt in degrees
    let raf = null;

    const onMove = (e) => {
      const r = photo.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5 .. 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        photo.style.transform =
          `perspective(800px) rotateY(${px * MAX}deg) rotateX(${-py * MAX}deg) scale(1.05)`;
      });
    };
    const reset = () => {
      if (raf) cancelAnimationFrame(raf);
      photo.style.transform = "";
    };

    photo.addEventListener("mousemove", onMove);
    photo.addEventListener("mouseleave", reset);
  }

  /* ---------- Particles ---------- */
  const field = document.getElementById("particles");
  if (field && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const count = window.innerWidth < 640 ? 18 : 36;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      const size = Math.random() * 3 + 2;
      s.style.left = Math.random() * 100 + "%";
      s.style.bottom = "-10px";
      s.style.width = s.style.height = size + "px";
      s.style.animationDuration = Math.random() * 10 + 10 + "s";
      s.style.animationDelay = Math.random() * 12 + "s";
      s.style.background =
        Math.random() > 0.5 ? "var(--accent-2)" : "var(--accent)";
      frag.appendChild(s);
    }
    field.appendChild(frag);
  }
})();
