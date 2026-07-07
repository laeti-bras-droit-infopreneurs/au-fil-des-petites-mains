// Menu mobile : ouvre/ferme la liste au clic sur « ☰ Menu »
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var menu = document.querySelector('.nav ul');
  if (toggle && menu) {
    toggle.addEventListener('change', function () {
      menu.classList.toggle('open', toggle.checked);
    });
    // Referme le menu après un clic sur un lien
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.checked = false;
        menu.classList.remove('open');
      });
    });
  }
});
