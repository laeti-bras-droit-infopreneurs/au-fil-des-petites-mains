// Change à chaque génération du site : ajouté aux URL du CSS/JS pour que
// les navigateurs ne réutilisent pas une ancienne version en cache.
module.exports = {
  version: Date.now().toString(36)
};
