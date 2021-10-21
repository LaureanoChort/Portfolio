//Menu
let menuBtn = document.querySelector(".fa-bars");

menuBtn.addEventListener("click", () => {
  let nav = document.querySelector(".nav");
  let navBackgr = document.querySelector(".nav-background");
  let closeBtn = document.querySelector(".close-btn");

  nav.classList.add("show");
  navBackgr.classList.add("show");
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("show");
    navBackgr.classList.remove("show");
  });

  navBackgr.addEventListener("click", () => {
    nav.classList.remove("show");
    navBackgr.classList.remove("show");
  });

  let menuItems = document.querySelectorAll(".menu-item");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", () => {
      nav.classList.remove("show");
      navBackgr.classList.remove("show");
    });
  }
});

//Typing effect
let txtIndex = 0;

const type = () => {
  let txt = document.querySelector(".text-2");
  let txtContent = "Front-end developer";

  if (txtIndex < txtContent.length) {
    txt.textContent += txtContent.charAt(txtIndex);
    txtIndex++;
    setTimeout(type, 150);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1200);
});

//Scroll
const show = () => {
  let sections = document.querySelectorAll(".hidden");

  for (let i = 0; i < sections.length; i++) {
    let windowHeight = window.innerHeight;
    let sectionTop = sections[i].getBoundingClientRect().top;
    let sectionPoint = 50;

    if (sectionTop < windowHeight - sectionPoint) {
      sections[i].classList.add("active");
    }
  }
};

window.addEventListener("scroll", () => {
  show();
  let upBtn = document.querySelector(".up-btn");
  upBtn.classList.toggle("sticky", window.scrollY > 0);
});
