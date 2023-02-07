const tl = gsap.timeline();

function pagaAnimIn(container) {
  return (
    tl
      .to(container.querySelector(".preloader"), {
        scale: 3,
        duration: 2,
        // transformOrigin  : "top left",
        clipPath:
          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        opacity: 1,
        zIndex: 99,
        x: "50%",
        y: "50%",
      })
      // return tl
      .to(container.querySelector(".preloader-top"), {
        scaleX: 1,
        transformOrigin: "top left",
        duration: 0.5,
      })
      .to(container.querySelector(".preloader-bottom"), {
        scaleX: 1,
        transformOrigin: "bottom right",
        duration: 0.5,
      })
  );
}

function pagaAnimOut(container) {
  return (
    tl
      // return tl
      .from(container.querySelector(".preloader-top"), {
        scaleX: 1,
        transformOrigin: "top left",
        duration: 0.5,
      })
      .from(container.querySelector(".preloader-bottom"), {
        scaleX: 1,
        transformOrigin: "bottom right",
        duration: 0.5,
      })
      .from(container.querySelector(".preloader"), {
        scale: 2.5,
        duration: 1.5,
        clipPath:
          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        // transformOrigin: "top left",
        // clipPath: "circle(50% at 0% 0%)",
        zIndex: 99,
        opacity: 1,
        x: "50%",
        y: "50%",
      })
  );
}

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      async leave(data) {
        await pagaAnimIn(data.current.container);
        data.current.container.remove();
      },
      async enter(data) {
        await pagaAnimOut(data.next.container);
      },
      async beforeEnter(data) {
        if (data.current.namespace == "contact") {
          // инициализация после перезагрузки
          await init();
        }
      },
    },
  ],
});
