const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("[data-count]").forEach((item) => {
  const target = Number(item.dataset.count || 0);
  let current = 0;
  const step = Math.max(1, Math.round(target / 60));
  const run = () => {
    current = Math.min(target, current + step);
    item.textContent = current.toLocaleString("en-IN") + (item.dataset.suffix || "");
    if (current < target) requestAnimationFrame(run);
  };
  run();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .14 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = "Thank you. The ABS team will contact you shortly.";
    form.reset();
  });
});
