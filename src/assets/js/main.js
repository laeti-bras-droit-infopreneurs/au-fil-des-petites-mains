// Filtre de recherche du tableau de tarifs
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-tarifs]').forEach(function (bloc) {
    var champ = bloc.querySelector('[data-tarifs-search]');
    var lignes = bloc.querySelectorAll('tbody tr');
    var vide = bloc.querySelector('[data-tarifs-empty]');
    if (!champ || !lignes.length) return;

    // Insensible à la casse et aux accents (« eclair » trouve « éclair »)
    var normalise = function (t) {
      return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    };

    champ.addEventListener('input', function () {
      var recherche = normalise(champ.value.trim());
      var visibles = 0;
      lignes.forEach(function (ligne) {
        var correspond = !recherche || normalise(ligne.textContent).indexOf(recherche) !== -1;
        ligne.hidden = !correspond;
        if (correspond) visibles++;
      });
      if (vide) vide.hidden = visibles > 0;
    });
  });
});

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
