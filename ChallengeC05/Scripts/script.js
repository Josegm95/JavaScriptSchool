document.getElementById('user').addEventListener('click', () => {
  const m = document.getElementById('midle-header');
  const u = document.getElementById('user-header');
  if (m.className === 'midle-header') {
    m.className += ' show-header';
    u.className += ' show-header';
  } else {
    m.className = 'midle-header';
    u.className = 'user-header';
  }
});

document.getElementById('menu').addEventListener('click', () => {
  const n = document.getElementById('nav-container');
  if (n.className === 'nav-container') {
    n.className += ' show-nav';
  } else {
    n.className = 'nav-container';
  }
});
