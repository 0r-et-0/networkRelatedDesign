# Network Related Design
Ipad connection script

A faire dans glitch.me :

1) Créez un projet sur glitch.me.
2) Ajoutez le contenu des fichiers "index.html", "script.js", "config" et "style.css" dans votre projet glitch.me.
3) Modifiez les noms des projets dans "index.html".
4) Créez une nouvelle base de donnée firebase et remplacez le fichier "config.js" par celui de votre db.
5) Dans le fichier "script.js" modifiez les noms et les adresses des serveurs http.

A faire dans votre script :

Pour que tout fonctionne il faut que vos écrans tournent tous avec le même script. Dans ce script il y a une variable "ID" qui permet de définir quel est l'id de l'écran. Anisi chaque écran exécute le même code mais avec une variable "ID" différente.

6) Au début de votre code, ajoutez le bout de code "detectID.js". Ce morceau de code défini l'id de l'écran.
7) Puis dans votre foncition listen() ajoutez le contenu du fichier "listen.js". Ceci permettera à votre script de retourner sur votre projet glitch.me.
8) Ajoutez la fonction goToStartpage() qui se trouve dans le fichier "goToStartPage.js" quelque par dans votre code. Vous pouvez ensuite créer un bouton ou n'importe quel autre déclancheur pour activer cette fonction. Quand elle est activée, cette fonction renvoie tous les écrans sur la page principale de votre projet glitch.me où vous pourrez choisir un autre projet à lancer.

Utilisation :

Pour connecter votre installation connectez vos écran sur l'url de votre projet glitch.me en ajoutant à la fin "/?id=1" pour votre premier écran, "/?id=2" pour le deuxième et ainsi de suite. Voilà <3
