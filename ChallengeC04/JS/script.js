var keys = document.querySelectorAll('div.key');

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', playClick);
  keys[i].addEventListener('ontouchstart', playClick);
  keys[i].addEventListener('ontouchend', playClick);
}

function playClick(key) {
  switch (key.type) {
    case 'click':
      audio = key.srcElement.querySelector('audio');
      break;
    case 'ontouchstart':
      console.log(key);
      break;
    case 'ontouchend':
      console.log(key);
      break;
    default:
      break;
  }

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