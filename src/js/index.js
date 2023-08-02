var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  window.scrollY > 10
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
});

window.addEventListener("load", () => {
  darkMode();
  lightMode();
});

let colors = {
  light: {
    "--gray0": "#f3f3f3",
    "--gray1": "#e8e8e8",
    "--white": "#eefada",
    "--btn": "#7215a8",
    "--blackN": "#505157",
    "--purple": "#e4c1f9",
    "--darkpurple": "#7215a8",
    "--gold": "#c19840",
    "--blackO": "#212529bf",
    "--lightgold": "#f3da80",
    "--pink": "#f8f4f9",
    "--shadow": "0 1rem 10px #00000042",
    "--textBW": "#212529bf",
  },
  dark: {
    "--gray0": "#0c0117",
    "--gray1": "#27203D",
    "--white": "#069976",
    "--btn": "#27203D",
    "--blackN": "#979DAC",
    "--purple": "#e4c1f9",
    "--darkpurple": "#0c0117",
    "--gold": "#c19840",
    "--blackO": "#7D8597",
    "--lightgold": "#fff",
    "--pink": "#C3B1FF",
    "--shadow": "0 1rem 10px #4242423b",
    "--textBW": "#e9e8e8",
  },
};

let rootElm = document.querySelector(":root");

function darkMode() {
  rootElm.style.setProperty("--blackN", colors.dark["--blackN"]);
  rootElm.style.setProperty("--darkpurple", colors.dark["--darkpurple"]);
  rootElm.style.setProperty("--gray0", colors.dark["--gray0"]);
  rootElm.style.setProperty("--blackO", colors.dark["--blackO"]);
  rootElm.style.setProperty("--lightgold", colors.dark["--lightgold"]);
  rootElm.style.setProperty("--pink", colors.dark["--pink"]);
  rootElm.style.setProperty("--shadow", colors.dark["--shadow"]);
  rootElm.style.setProperty("--gray1", colors.dark["--gray1"]);
  rootElm.style.setProperty("--btn", colors.dark["--btn"]);
  rootElm.style.setProperty("--white", colors.dark["--white"]);
  rootElm.style.setProperty("--textBW", colors.dark["--textBW"]);
}

function lightMode() {
  rootElm.style.setProperty("--blackN", colors.light["--blackN"]);
  rootElm.style.setProperty("--darkpurple", colors.light["--darkpurple"]);
  rootElm.style.setProperty("--gray0", colors.light["--gray0"]);
  rootElm.style.setProperty("--blackO", colors.light["--blackO"]);
  rootElm.style.setProperty("--lightgold", colors.light["--lightgold"]);
  rootElm.style.setProperty("--pink", colors.light["--pink"]);
  rootElm.style.setProperty("--shadow", colors.light["--shadow"]);
  rootElm.style.setProperty("--gray1", colors.light["--gray1"]);
  rootElm.style.setProperty("--btn", colors.light["--btn"]);
  rootElm.style.setProperty("--white", colors.light["--white"]);
  rootElm.style.setProperty("--textBW", colors.light["--textBW"]);
}

let inputMode = document.querySelector(".form-check-input");

inputMode.addEventListener("click", (e) => {
  if (e.target.getAttribute("mode") === "light") {
    darkMode();
    e.target.setAttribute("mode", "dark");
  } else if (e.target.getAttribute("mode") === "dark") {
    lightMode();
    e.target.setAttribute("mode", "light");
  }
});

// design and web development by SAEID SHOJAEI
