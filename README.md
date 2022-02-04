# TP 4 - IOT

## Groupe

    - SBAAI Abdelaziz p1807434
    - BOUGE Yoann p1711842
    - NASR Bechir p1926686
    - SOUGH Zakari p2018460

## Spec technique

Cette aplication utilise le bundler **Vite** pour garantir un temps de build plus rapide et un bundle size plus petit

<br><br>

# Présentation du projet

L'idée du projet est de simuler le chauffage autonome d'une maison pour réguler sa température intérieure.

Nous allons créer une maquette en carton représentant une maison ou un appartement dans laquelle nous allons placer un emetteur et un capteur infrarouge, un bouton, ainsi que 2 LEDs, une rouge et une bleu.

Le capteur infrarouge permettra de définir si l'utilisateur a passé la porte. Si l'utilisateur a passé la porte, le système se mettra en mode **economie d'énergie**. S'il repasse de nouveau la porte le système repassera en mode **présence**. Un bouton permettra d'activer le **mode vacance**, il faudra appuyer de nouveau pour désactiver ce mode. Lors de la désactivtion du mode, l'utilisateur est à l'intérieur de la maison c'est donc le mode **présence** qui prend la main.

Les deux LEDs représenteront le chauffage et la climatisation. Lorsque la LED rouge sera allumé cela signifira que le chauffage est allumé, et inversement, la LED bleu simulera l'état de la climatisation.

![Maquette d'une maison en carton](http://3.bp.blogspot.com/_khIbCj13leA/R9P0SkWrcvI/AAAAAAAAABQ/vlfamO5ra7c/s320/IMG_0020.JPG)

---

### Chauffage autonome

Le chauffage autonome possède 3 modes :

-   Le mode activé, lorsque l'utilisateur est dans la maison, s'occupera d'allumer le chauffage ou la climatisation pour réguler la température en fonction de la température extérieur. Le chauffage s'activera en dessous de 20°C et la climatisation au dessus de 25°C pour garder une température intérieur ambiante correcte.
-   Le mode économie d'énergie, lorsque l'habitant est absent pour une courte duréee (1 2 journée(s) max), alternera l'activité du chauffage et de la climatisation toutes les 5 secondes. De plus la fenêtre de température utilisé pour la régulation sera plus grande. C'est à dire que le chauffage s'activera en dessous de 15°C et la climatisation au dessus de 30°C.
-   Le mode vacances quant à lui, désactivera le chauffage et la climatisation. Ce mode pourra être activé ou désactivé en actionnant un bouton.

```java
if ( present ) {

	chauffage/climatisation régulation de la température en fonction de la température extérieur.
	// chauffage < 20:25 > climatisation

} else if ( mode vacances ) {

	chauffage/climatisation désactivé

} else { // mode économie d'energie

	chauffage/climatisation activé par intermittence (toutes les 5sec) en fonction de la température extérieur
	// chauffage < 15:30 > climatisation

}
```

## Architecture

---

### Architecture Logicelle

### Architecture matérielle

1x capteur de présence
1x Arduino
1x LED rouge
1x LED bleu
1x boite en carton
1x playmobile

---

## Déploiement

-   https://tiw8-tp04.herokuapp.com

## API

#### Afficher la temperature actuel

-   URL : `https://tiw8-tp04.herokuapp.com/weather`
-   Methode : `GET`
-   Exemple : `curl -X GET https://tiw8-tp04.herokuapp.com/weather`

#### Afficher le mode actuel

-   URL : `https://tiw8-tp04.herokuapp.com/current_mode`
-   Methode : `GET`
-   Exemple : `curl -X GET https://tiw8-tp04.herokuapp.com/current_mode`

#### Modifier le mode actuel

-   URL : `https://tiw8-tp04.herokuapp.com/current_mode`
-   Methode : `POST`
-   Exemple : `curl -d '{"req_mode":"Mode vacances"}' -H "Content-Type: application/json" -X POST https://tiw8-tp04.herokuapp.com/current_mode`

## Guide de commandes

-   `yarn run build` : Créer un bundle de notre application en mode production
-   `yarn run start` : Lance le serveur express en mode production, il est fortement conseillé de lancer `yarn run build` avant
-   `yarn run dev` : Créer un bundle de notre application en mode developpement et lance le serveur Express

-   `git push heroku main` : Déploie l'application sur heroku (fonctionne uniquement sur la branche master ou main)
