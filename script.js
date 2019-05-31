database = firebase.database();
send('PROJET', {
    'name' : "nobody",
});

let setup = false;
let ID;
let query = window.location.search.substring(1);
let id = query.split('=')[1];
switch (id) {
case '1':
  ID = 1;
  break;
case '2':
  ID = 2;
  break;
case '3':
  ID = 3;
  break;
case '4':
  ID = 4;
  break;
}

console.log(ID);
listen();

function chooseID(num){
  if(num == 1){
    console.log('diane');
    send('PROJET', {
        'name' : "diane",
    });
  }
  if(num == 2){
    console.log('paul');
    send('PROJET', {
        'name' : "paul",
    });
  }
  if(num == 3){
    console.log('maya');
    send('PROJET', {
        'name' : "maya",
    });
  }
  if(num == 4){
    console.log('aurel');
    send('PROJET', {
        'name' : "aurelien",
    });
  }  
}

function send(path, _data) {
    var json = {'data' : _data};
    database.ref(path).set(json);
}

function listen() {
	database.ref("PROJET").on('value', function(snapshot) {
    if (snapshot.val()) {
        var datas = snapshot.val().data;
        if(datas.name == "diane"){
          document.location.assign('http://10.192.250.223:8080/?id=' + String(ID));
        }
        if(datas.name == "paul"){
          document.location.assign('http://10.192.234.111:8080/?id=' + String(ID));
        }
        if(datas.name == "maya"){
          document.location.assign('http://10.192.232.150:8080/?id=' + String(ID));
        }
        if(datas.name == "aurelien"){
          document.location.assign('http://192.168.43.119:8080/?id=' + String(ID));
        }
      }
  });
}
