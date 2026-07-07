# Au Fil des Petites Mains

Site vitrine statique reproduisant [aufildespetitesmains.fr](https://www.aufildespetitesmains.fr/) — atelier de couture d'Aurélia Bordier à Campagne (Dordogne) : retouches, broderies personnalisées et cours de couture.

## Structure

Site 100 % statique (HTML/CSS/JS), sans étape de build. Hébergeable directement sur **GitHub Pages**.

```
index.html            Accueil
broderie.html         Broderies personnalisées
retouches.html        Retouches
cours.html            Cours de couture
carte-cadeau.html     Carte cadeau
qui-suis-je.html      Qui suis-je ?
contact.html          Contact (formulaire + carte)
cgv.html              Conditions générales de vente
mentions-legales.html Mentions légales
confidentialite.html  Politique de confidentialité
assets/
  css/style.css       Feuille de style
  js/main.js          Menu mobile
  img/                Logo, photos, labels
```

## Aperçu local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python -m http.server 8000
# puis http://localhost:8000
```

## Formulaire de contact

Le formulaire (`contact.html`) utilise [FormSubmit](https://formsubmit.co/) — aucun serveur requis.
Au **premier envoi**, FormSubmit envoie un e-mail de confirmation à `aufildespetitesmains@gmail.com`
qu'il faut valider une seule fois pour activer la réception des messages.

## Mise en ligne (GitHub Pages)

1. Créer un dépôt GitHub et y pousser ce dossier.
2. Dans **Settings → Pages**, choisir la branche `main` et le dossier `/ (root)`.
3. Le site est publié sous `https://<utilisateur>.github.io/<dépôt>/`.

> Note : reproduction indépendante réalisée à des fins personnelles. Le contenu, le logo et
> les photographies appartiennent à Au Fil des Petites Mains.
