function adjustDimensions() {
  const section = document.getElementsByTagName("section")[0];
  section.style.height = window.innerHeight + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  adjustDimensions();
}, false);

window.onresize = adjustDimensions;