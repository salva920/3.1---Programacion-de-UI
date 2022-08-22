document.querySelector('button').onclick = function() {
    alert('¡Muchas Gracias! ¡Pronto nos contactamos!');
}

//navegacion
function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
  }



// info html
var e = document.getElementById('stack');
e.onmouseover = function() {
  document.getElementById('infoStack').style.display = 'inline-block';
  document.getElementById('infoStack').style.backgroundColor = 'cyan';
  document.getElementById('infoStack').style.fontSize = '14px';
  document.getElementById('infoStack').style.marginLeft = '22%'
  
}
e.onmouseout = function() {
  document.getElementById('infoStack').style.display = 'none';
}

// info html
var e = document.getElementById('html');
e.onmouseover = function() {
  document.getElementById('infoHtml').style.display = 'block';
  document.getElementById('infoHtml').style.backgroundColor = 'orange';
  document.getElementById('infoHtml').style.fontSize = '14px';
}
e.onmouseout = function() {
  document.getElementById('infoHtml').style.display = 'none';
}

// info css
var e = document.getElementById('css');
e.onmouseover = function() {
  document.getElementById('infoCss').style.display = 'block';
  document.getElementById('infoCss').style.backgroundColor = 'cyan';
  document.getElementById('infoCss').style.fontSize = '14px';
  
}
e.onmouseout = function() {
  document.getElementById('infoCss').style.display = 'none';
}

// info js
var e = document.getElementById('js');
e.onmouseover = function() {
  document.getElementById('infoJs').style.display = 'block';
  document.getElementById('infoJs').style.backgroundColor = 'yellow';
  document.getElementById('infoJs').style.fontSize = '14px';
}
e.onmouseout = function() {
  document.getElementById('infoJs').style.display = 'none';
}




document.querySelector('p').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}