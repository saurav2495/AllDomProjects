var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var growth = document.querySelector("#growth");
var grow = 0;
var random = Math.floor(Math.random() * 100);

btn.addEventListener("click", function () {
  var intergrow = setInterval(() => {
    grow++;
    h1.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, random);

  setTimeout(() => {
    clearInterval(intergrow);
    btn.style.pointerEvents = "none";
    btn.style.opacity = 0.8;
    btn.innerHTML = "downloaded";
  }, random * 100);
});
