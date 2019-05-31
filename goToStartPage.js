//cette fonction envoie les données à votre firebase pas à la database que vous devez créer pour gérer glitch.me

function goToStartPage(){
    send('GOBACK', {
        'goBack' : true
    });
}
