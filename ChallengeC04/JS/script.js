/* eslint-env browser */
function showList() {
  const container = document.getElementById('song-list');
  const piano = document.getElementById('piano');
  if (container.className === 'song-list') {
    container.className += '-active';
    piano.style.zIndex = -1;
  } else {
    container.className = 'song-list';
    piano.style.zIndex = 1;
  }
}
document.getElementById('list-icon').addEventListener('click', showList);

const keys = document.querySelectorAll('div.key');

function playClick(key) {
  const audio = key.srcElement.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('click', playClick);
}

function playKey(key) {
  try {
    const audio = document.getElementById(key.keyCode);
    const div = audio.parentElement;
    if (key.type === 'keydown') {
      audio.currentTime = 0;
      audio.play();
      div.className += ' act';
    } else {
      div.classList.remove('act');
    }
  } catch (e) {
    console.log('Error: The keyboard pressed is invalid, use olny a, w, s, e, d, j, i, k, o, l, p, ñ.');
  }
}

window.addEventListener('keydown', playKey);
window.addEventListener('keyup', playKey);
