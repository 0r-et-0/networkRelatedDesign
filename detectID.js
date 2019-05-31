let ID;
let query = window.location.search.substring(1); //on récupère l'id écrit dans l'url
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
