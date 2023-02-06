
const cursor = document.querySelector("#cursor");
const anchor = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});

buttons.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});