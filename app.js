/*hide and show login prompt*/
function toggle(button, theDiv) {
  var buttonName = document.getElementById(button);
  buttonName.addEventListener('click', function(){
    var div = document.getElementById(theDiv);
    if (div.className === 'collapse'){
      div.setAttribute('class', 'collapse in');
    } 
    else if (div.className === 'collapse in'){
      div.setAttribute('class', 'collapse');
    }
    else {
      console.log('You got the wrong div');
    }
  }, false)
}

toggle('login', 'log-in');
toggle('createnew', 'create-new');
toggle('getall', 'all-in');