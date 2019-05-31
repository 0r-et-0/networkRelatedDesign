function listen() {
    database.ref("GOBACK").on('value', function(snapshot) {
        if (snapshot.val()) {
            var datas = snapshot.val().data;
            if(datas.goBack == true){
                send('GOBACK', {
                    'goBack' : false
                });
                if(ID == 1){
                    window.location = 'https://LENOMDEVOTREPROJET.glitch.me/?id=1';
                }
                if(ID == 2){
                    window.location = 'https://LENOMDEVOTREPROJET.glitch.me/?id=2';
                }
                if(ID == 3){
                    window.location = 'https://LENOMDEVOTREPROJET.glitch.me/?id=3';
                }
                if(ID == 4){
                    window.location = 'https://LENOMDEVOTREPROJET.glitch.me/?id=4';
                }
            }
        }
    });
}
