document.getElementById('list-icon').addEventListener('click', showList);
function showList() {
  container = document.getElementById('song-list');
  piano = document.getElementById('piano');
  if (container.className === 'song-list') {
    container.className += '-active';
    piano.style.zIndex = -1;
  } else {
    container.className = 'song-list';
    piano.style.zIndex = 1;
  }
}

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
window.addEventListener('keyup', playKey);

function playKey(key) {
  try {
    var audio = document.getElementById(key.keyCode);
    var div = audio.parentElement;
    if (key.type === 'keydown') {
      audio.currentTime = 0;
      audio.play();
      div.className += " act";
    } else {
      div.classList.remove('act');
    }
  } catch {
    console.log('Error: The keyboard pressed is invalid, use olny a, w, s, e, d, j, i, k, o, l, p, ñ.');
  }
}