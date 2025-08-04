function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const toggle = document.createElement("button");
    toggle.textContent = "Hide Section";
    toggle.className = "toggle-btn";
    section.insertBefore(toggle, section.children[1]);

    toggle.addEventListener("click", () => {
      const content = section.querySelector(".sectionContent");
      if (content.style.display === "none") {
        content.style.display = "block";
        toggle.textContent = "Hide Section";
      } else {
        content.style.display = "none";
        toggle.textContent = "Show Section";
      }
    });
  });
});

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
});


const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerText = "⬆️";
document.body.appendChild(scrollTopBtn);

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
