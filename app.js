/*hide and show login prompt*/
function clicked(button, toggle) {
 if (status.length === 1) {
    addEventListener('clicked',function() {
      status.setAttribute('collapse', 'in');
    }, false)
 }
 else {
    addEventListener('clicked',function() {
      status.setAttribute('collapse');
    }, false)
  }
}

var loginButton = document.getElementById('login');
var login = document.getElementById('log-in');
var status = login.getAttribute('class');
clicked(loginButton, status);

