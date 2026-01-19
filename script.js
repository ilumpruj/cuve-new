const revealElements = document.querySelectorAll(".section, .hero, .site-header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
