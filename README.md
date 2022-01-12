# TP 4 - IOT
## Groupe
	- SBAAI Abdelaziz p1807434
	- BOUGE Yoann p1711842
	- mettez vos noms et numéro étudiant
## Deploiement
[heroku](https://tp4-tiw8.herokuapp.com/)
## Guide de commandes
- `yarn run build` : Créer un bundle de notre application en mode production
- `yarn run start` : Lance le serveur express en mode production, il est fortement conseillé de lancer `yarn run build` avant
- `yarn run dev` : Créer un bundle de notre application en mode developpement et lance le serveur Express

- `git push heroku main` : Déploie l'application sur heroku (fonctionne uniquement sur la branche master ou main)
## Spec technique
Cette aplication utilise le bundler **Vite** pour garantir un temps de build plus rapide et un bundle size plus petit

<br><br>


# Présentation du projet 
L'idée du projet est de simuler la domotique d'une maison autonome. Il sera possible d'ajouter plusieurs features selon les capteurs/actionneurs qui seront mis à notre disposition. 
Nous allons créer une maquette en carton représentant les différentes pièces d'une maison ou d'un appartement dans lesquels nous pourrons placer les capteurs/actionneurs pour réaliser des actions définies par l'utilisateur. 

![Maquette d'une maison en carton](http://3.bp.blogspot.com/_khIbCj13leA/R9P0SkWrcvI/AAAAAAAAABQ/vlfamO5ra7c/s320/IMG_0020.JPG)

L'utilisateur pourra gérer les paramètres des fonctionnalités de sa maison via une interface. 

## Fonctionnalités 
___
La liste des fonctionnalités est exhaustive et non définitive, nous pourrons adapter les idées suivantes en fonction du matériel qui sera à notre disposition. 

### Alarme 

À l'aide d'un piézo et d'un capteur de présence (capteur de proximité par exemple), il est possible de concevoir un alarm (activable et désactivable depuis l'interface). 
Cette alarme sera déclanchée par exemple lorsque la porte d'entrée s'ouvre ou bien qu'il y a un mouvement dans une des pièces de la maison et que l'alarme a été activée. 

### Lumière autonome

Lorsque cette fonctionnalité est activée, des capteurs de présence pourront allumer et éteindre les lumières des pièces en fonction des déplacements de l'utilisateur.
Par exemple : `L'utilisateur quitte le salon pour aller dans la chambre => les lumières du salon s'éteindront et celles de la chambre s'allumeront.`

La dernière pièce qui aura détecté une présence sera la pièce éclairée, même si l'utilisateur ne bouge plus ou n'est pas détéctée par les capteurs. 

Les lumières seront simulé par des LEDs. 
Des capteurs de proximité pourront servir de capteur de présence. 

### Cafetière programmable 

Une cafetière pourra être démarrée ou programmée depuis l'interface pour être démarrée à une heure précise certains jours de la semaine. 

La cafetière sera simulée par une LED. 

### Dévérouillage de la porte

La porte d'entrée pourra être déverrouillée depuis l'interface.

Un moteur pourra bloquer l'ouverture de la porte.

### Chauffage autonome

Le chauffage pourra s'activer lorsque la température descendra en dessous de 20 degrés. Si l'alarme est activée le chauffage passera en veille et ne s'activera que lorsque la température descendra en dessous de 8 degrés.

### Mode vacances

Lorsque l'utilisateur activera le mode vacances la porte se verrouillera, l'alarme s'activera, le chauffage se mettra en veille, les lumières autonomes et la cafetière seront également désactivées jusqu'au retour de l'utilisateur.
  

## Architecture 
___
### Architecture Logicelle

### Architecture matérielle