/*hide and show login prompt*/
function showClick() {
  var showEl = document.className('hidden');
  document.getElementById(showEl);
  
}

var navLogin = document.getElementById('log-in');
var btn = document.getElementsByTagName('btn')
btn.addEventListener('click', showClick, false);
