screen.orientation.lock('landscape');
var keys = document.querySelectorAll('div.key');

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', playClick);
}

function playClick(key) {
  audio = key.srcElement.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playKey);

function playKey(key) {
  try {
    audio = document.getElementById(key.keyCode);
    audio.currentTime = 0;
    audio.play();
  } catch {
    console.log('Error: The keyboard pressed is invalid, use olny a, w, s, e, d, j, i, k, o, l, p, ñ.');
  }
}