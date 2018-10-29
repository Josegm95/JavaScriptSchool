var userindex = 0;
var menuindex = 0;

document.getElementById("user").addEventListener("click", function() {
  var h = document.getElementById("header-container").style;
  if (userindex == 0) {
    h.left = 'auto';
    userindex = 1;
  } else if (userindex == 1) {
    h.left = '-101%';
    userindex = 0;
  }
});

document.getElementById("menu").addEventListener("click", function() {
  var n = document.getElementById("nav-container").style;
  if (menuindex == 0) {
    n.left = 'auto';
    menuindex = 1;
  } else if (menuindex == 1) {
    n.left = '-101%';
    menuindex = 0;
  }
});
