const link = document.querySelector('.list');

link.onclick = e => { 
  e.preventDefault();
  document.querySelector('header').style.background = 'red';
};