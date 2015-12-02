/*hide and show login prompt*/

function clicked(button, toggle) {
 if (toggle === 'collapse') {
    addEventListener('clicked',function() {
      class.setAttribute('collapse', 'in');
    }, false)
 }
 else if (toggle === 'in') {
    addEventListener('clicked',function() {
      class.setAttribute('in', 'collapse');
    }, false)
 }
 else {
   console.log('broken');
 }
}


var loginButton = getElementById('login');
var login = getElementById('log-in');
clicked(loginButton, login[1]);

