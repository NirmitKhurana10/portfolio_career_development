document.addEventListener("DOMContentLoaded", function () {
  // Typewriter Effect
  const text = "Nirmit Khurana";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Slide-in Animation
  const sections = document.querySelectorAll(".slide-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));

  // Button Hover Effects
  document.querySelectorAll("nav a").forEach((btn) => {
    btn.addEventListener(
      "mouseover",
      () => (btn.style.transform = "scale(1.1)")
    );
    btn.addEventListener("mouseout", () => (btn.style.transform = "scale(1)"));
  });
});
