# Au Fil des Petites Mains

Site vitrine de l'atelier de couture d'Aurélia Bordier à Campagne (Dordogne) : retouches, broderies personnalisées et cours de couture.

🌐 **Site en ligne :** https://laeti-bras-droit-infopreneurs.github.io/au-fil-des-petites-mains/

## Fonctionnement

- **Eleventy** génère le site statique à partir des gabarits (`src/*.njk`) et du contenu (`src/_data/*.json`, `src/*.md`).
- **GitHub Actions** reconstruit et publie le site sur GitHub Pages à chaque modification de la branche `main`.
- **Pages CMS** ([app.pagescms.org](https://app.pagescms.org)) permet d'éditer tout le contenu (textes, photos, horaires, tarifs) sans toucher au code — configuration dans `.pages.yml`.

```
.pages.yml                  Configuration de l'interface d'édition (Pages CMS)
.github/workflows/deploy.yml  Build + déploiement automatique
eleventy.config.js          Configuration Eleventy
src/
  _includes/base.njk        Gabarit commun (en-tête, navigation, pied de page)
  _includes/legal.njk       Gabarit des pages légales
  _data/site.json           Coordonnées, horaires, réseaux sociaux
  _data/*.json              Contenu de chaque page
  *.njk                     Gabarits des pages
  *.md                      Pages légales (CGV, mentions, confidentialité)
  assets/                   CSS, JS, images
```

## Modifier le contenu (pour la cliente)

1. Se connecter sur **https://app.pagescms.org** avec un compte GitHub ayant accès à ce dépôt.
2. Choisir le dépôt `au-fil-des-petites-mains`.
3. Modifier les textes/photos dans les sections (Accueil, Retouches, Cours…) et **enregistrer**.
4. Le site se met à jour automatiquement en 1 à 2 minutes.

## Développement local

Nécessite Node.js ≥ 18 :

```bash
npm install
npm start        # serveur local avec rechargement
npm run build    # génère le site dans _site/
```

## Formulaire de contact

Le formulaire utilise [FormSubmit](https://formsubmit.co/). Au premier envoi, un e-mail de
confirmation est envoyé à l'adresse configurée (à valider une seule fois).

> Note : reproduction indépendante du site original réalisée à des fins personnelles.
> Le contenu, le logo et les photographies appartiennent à Au Fil des Petites Mains.
