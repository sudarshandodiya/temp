var size = 5;
var target = document.getElementById("demo");
var grow = setInterval(growHelper, 1000);
var shrink;
var size = 5;

function growHelper() {
  target.innerHTML = "TEXT GROWING";
  target.setAttribute("style", "font-size: " + size + "px; color: red;");
  size += 5;
  if (size >= 50) {
    clearInterval(grow);
    shrink = setInterval(shrinkHelper, 1000);
  }
}
function shrinkHelper() {
  target.innerHTML = "TEXT SHRINKING";
  target.setAttribute("style", "font-size: " + size + "px; color: blue;");
  size -= 5;
  if (size == 5) {
    clearInterval(shrink);
  }
}
