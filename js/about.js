/* about.js — animated statistics counters (run when scrolled into view) */
(function () {
  const nums = Array.from(document.querySelectorAll(".stat-card__num"));
  if (!nums.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.target || "0", 10);
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = Math.round(eased * target).toString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toString();
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((n) => io.observe(n));
  } else {
    nums.forEach(animate);
  }
})();
