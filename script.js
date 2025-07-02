let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
};

// Interatividade simples: mostra qual stack foi clicada
document.querySelectorAll('.stack-container img').forEach(icon => {
  icon.addEventListener('click', () => {
    alert(`Você clicou em ${icon.alt}!`);
  });
});
const typed = new Typed("#typed-text", {
  strings: ["I’m a Developer"],
  typeSpeed: 80,
  backSpeed: 100,
  startDelay: 300,
  loop: true
});