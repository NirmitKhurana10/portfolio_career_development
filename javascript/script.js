// Scroll reveal animation (fade in sections)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial animation setup
sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
});
