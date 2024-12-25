const Cir = document.querySelector(".circle");
const btn = document.querySelector(".btn");

let bulb = "off";

btn.addEventListener("click", () => {
  if (bulb == "off") {
    Cir.style.backgroundColor = "yellow";
    btn.textContent = "On";
    bulb = "on";
  } else {
    Cir.style.backgroundColor = "black";
    btn.textContent = "Off";
    bulb = "off";
  }
});
