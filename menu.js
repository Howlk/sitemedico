var wind = window.pageYOffset;
window.onscroll = function() {
var down = window.pageYOffset;
  if (wind > down) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-200px";
  }
  wind = down;
}

