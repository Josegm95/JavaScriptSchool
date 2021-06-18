const m = document.getElementById('midle-header');
const u = document.getElementById('user-header');
const n = document.getElementById('nav-container');

document.getElementById('user-button').addEventListener('click', () => {
  if (m.className === 'midle-header') {
    n.className = 'nav-container';
    m.className += ' show-header';
    u.className += ' show-header';
  } else {
    m.className = 'midle-header';
    u.className = 'user-header';
  }
});

document.getElementById('menu-button').addEventListener('click', () => {
  if (n.className === 'nav-container') {
    m.className = 'midle-header';
    u.className = 'user-header';
    n.className += ' show-nav';
  } else {
    n.className = 'nav-container';
  }
});
