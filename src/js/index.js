/**
 * Функция normalize100vh устанавливает 100vh для доступного к просмотру вюпорта
 * тем самым приводя для всех браузеров высоту к одному виду и адапптирует так
 * что в браузерах с полосами которые сверху и снизу сайт не заходит под них
 */
function normalize100vh() {
  const setHeight = () => {
    const vh = window.innerHeight * 0.01; // наxодим  1vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // --vh использовать в css -> height: calc(var(--vh) * 100);
  };
  setHeight();
  window.addEventListener("resize", setHeight);
}
normalize100vh();

// SmoothScroll
SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 2500,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 10,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});

// splittext
const text = SplitType.create(".banner__title");
const runwaytext = SplitType.create(".runway__text--accent");
const footertext = SplitType.create(".footer-copurithing__logo");

gsap.to(".char", {
  y: "0%",
  stagger: 0.05,
  delay: 0.02,
  duration: 0.2,
  opacity: 1,
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "power3.inOut", duration: 2 });

gsap.fromTo(
  ".page__logo",
  {
    y: "-300%",
    opacity: 0.5,
    scale: 0.5,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    delay: 0,
  }
);

gsap.fromTo(
  ".banner__image-model",
  {
    y: "-11%",
  },
  {
    y: "0",
  }
);

const cercle = gsap.timeline({ repeatDelay: 1 });
cercle.fromTo(
  ".banner__image-circle",
  { y: "100%", x: "-50%", scale: 0.3, opacity: 0 },
  { y: "50%", x: "-50%", scale: 1, opacity: 0.5, delay: 1 }
);

cercle.to(".banner__image-circle", { opacity: 1, delay: 0 });

gsap.fromTo(
  ".banner__svg-ss",
  {
    y: -60,
    opacity: 0,
    scale: 0,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    delay: 1.5,
  }
);

gsap.fromTo(
  ".aside",
  {
    x: "100%",
  },
  {
    x: 0,
    delay: 2,
  }
);

gsap.from(".about__title", {
  x: "30%",
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".about__title",
    start: "0% 90%",
    end: "0% 50%",
  },
});
gsap.from(".runway__title", {
  x: "30%",
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".runway__title",
    start: "0% 90%",
    end: "0% 50%",
  },
});

gsap.from(".runway__subtitle", {
  scrollTrigger: {
    trigger: ".runway__subtitle",
    start: "0% 90%",
    end: "0% 50%",
  },
  x: "-80%",
  opacity: 0.2,
});

gsap.from(".about__subtitle", {
  scrollTrigger: {
    trigger: ".about__title",
    start: "0% 90%",
    end: "0% 50%",
    toggleActions: "restart restart reverse none",
  },
  x: "-80%",
  opacity: 0.2,
});

gsap.from(
  ".about__text",
  {
    scrollTrigger: {
      trigger: ".about__text",
      start: "top 80%",
      end: "80% 100%",
      toggleActions: "restart restart reverse none",
    },
    yPercent: -100,
    opacity: 0,
    stagger: 0.2,
  },
  {
    yPercent: 0,
    opacity: 1,
  }
);

gsap.from(".galery__svg-ss", {
  scrollTrigger: {
    trigger: ".galery__svg-ss",
    start: "top top",
    end: "bottom top ",
    toggleActions: "restart restart reverse none",
  },
  color: "#978bae",
  x: "60%",
  y: "-25%",
  duration: 1,
  opacity: 0,
});

const video = gsap.utils.toArray(".galery__item");

gsap.to(video, {
  xPercent: -100 * (video.length - 1),
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".galery__slider",
    pin: true,
    scrub: 2,
    snap: 1 / (video.length - 1),
    end: () => "+=" + document.querySelector(".galery__slider").offsetWidth,
    start: "50% 50%",
    end: "50%  0%",
    toggleActions: "restart restart reverse none",
  },
});

gsap.to(".runway__text--position-left", {
  ease: "none",
  scrollTrigger: {
    trigger: ".runway__text--position-left",
    pin: true,
    start: "50% 50%",
    end: "50%  0%",
    toggleActions: "restart restart reverse none",
  },
});

gsap.from(".runway__phone13", {
  rotation: -45,
  xPercent: -10,
  y: "25%",
  scrollTrigger: {
    trigger: ".runway__phone13",
    pin: true,
    start: "10% 50%",
    end: "30%  40%",
    toggleActions: "restart play reverse pause",
  },
});

const burger = document.querySelector(".aside__burger");
const buttonSrahe = document.querySelector(".aside__button");
const nav = document.querySelector(".nav");

buttonSrahe.addEventListener("click", () => {
  buttonSrahe.classList.toggle("aside__button--active");
  document
    .querySelector(".aside__share")
    .classList.toggle("aside-share--active");
});

burger.addEventListener("click", () => {
  // document.querySelector('html').classList.toggle('html-hidden')
  nav.classList.toggle("nav--active");
  burger.classList.toggle("aside__burger--active");
  document.querySelector(".nav__link:nth-child(1)").focus();
});

