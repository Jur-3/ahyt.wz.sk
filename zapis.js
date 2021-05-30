function pis()
{
  document.getElementById("message").style.display = "none";
  document.getElementById("v").style.display = "block";
  var meno = document.forms.forma.fname.value;
  var priez = document.forms.forma.lname.value;
  var emal = document.forms.forma.email.value;
  document.getElementById("vypis").innerHTML = "Vaše meno: "+meno+"<br>"+
  "Vaše Priezvisko: "+priez+"<br>"+"Váš email: "+emal;
  return false;
}

function ukaz()
{
  var u = document.getElementById("heslo");
  if(u.type === "password"){u.type = "text";}
  else{u.type = "password";}
}

function ukaz1()
{
  var u = document.getElementById("heslo1");
  if(u.type === "password"){u.type = "text";}
  else{u.type = "password";}
}

var zadanie = document.getElementById("heslo");
var zadanie1 = document.getElementById("heslo1");
var nizke = document.getElementById("nizke");
var vysoke = document.getElementById("vysoke");
var cislo = document.getElementById("cislo");
var dlzka = document.getElementById("dlzka");
var zhoda = document.getElementById("zhoda");

zadanie.onfocus = function(){document.getElementById("message").style.display = "block";
document.getElementById("message").scrollIntoView();}
zadanie1.onfocus = function(){document.getElementById("message").style.display = "block";
document.getElementById("message").scrollIntoView();}

zadanie.onkeyup = function()
{
  var nizkePismena = /[a-z]/g;
  if(zadanie.value.match(nizkePismena))
  {
    nizke.classList.remove("invalid");
    nizke.classList.add("valid");
  }
  else
  {
    nizke.classList.remove("valid");
    nizke.classList.add("invalid");
  }

  var vysokePismena = /[A-Z]/g;
  if(zadanie.value.match(vysokePismena))
  {
    vysoke.classList.remove("invalid");
    vysoke.classList.add("valid");
  }
  else
  {
    vysoke.classList.remove("valid");
    vysoke.classList.add("invalid");
  }

  var cisla = /[0-9]/g;
  if(zadanie.value.match(cisla))
  {
    cislo.classList.remove("invalid");
    cislo.classList.add("valid");
  }
  else
  {
    cislo.classList.remove("valid");
    cislo.classList.add("invalid");
  }

  if(zadanie.value.length >= 8)
  {
    dlzka.classList.remove("invalid");
    dlzka.classList.add("valid");
  }
  else
  {
    dlzka.classList.remove("valid");
    dlzka.classList.add("invalid");
  }

  if(zadanie.value == zadanie1.value && zadanie.value != 0)
  {
    zhoda.classList.remove("invalid");
    zhoda.classList.add("valid");
  }
  else
  {
    zhoda.classList.remove("valid");
    zhoda.classList.add("invalid");
  }
}

zadanie1.onkeyup = function()
{
  var nizkePismena = /[a-z]/g;
  if(zadanie1.value.match(nizkePismena))
  {
    nizke.classList.remove("invalid");
    nizke.classList.add("valid");
  }
  else
  {
    nizke.classList.remove("valid");
    nizke.classList.add("invalid");
  }

  var vysokePismena = /[A-Z]/g;
  if(zadanie1.value.match(vysokePismena))
  {
    vysoke.classList.remove("invalid");
    vysoke.classList.add("valid");
  }
  else
  {
    vysoke.classList.remove("valid");
    vysoke.classList.add("invalid");
  }

  var cisla = /[0-9]/g;
  if(zadanie1.value.match(cisla))
  {
    cislo.classList.remove("invalid");
    cislo.classList.add("valid");
  }
  else
  {
    cislo.classList.remove("valid");
    cislo.classList.add("invalid");
  }

  if(zadanie1.value.length >= 8)
  {
    dlzka.classList.remove("invalid");
    dlzka.classList.add("valid");
  }
  else
  {
    dlzka.classList.remove("valid");
    dlzka.classList.add("invalid");
  }

  if(zadanie1.value == zadanie.value && zadanie1.value != 0)
  {
    zhoda.classList.remove("invalid");
    zhoda.classList.add("valid");
  }
  else
  {
    zhoda.classList.remove("valid");
    zhoda.classList.add("invalid");
  }
}

var a = document.getElementById("kreslim");
   var ctx = a.getContext("2d");
  function udkaz()
  {
  ctx.beginPath();
  ctx.arc(5,5,4,0,2*Math.PI);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.stroke();
  }
function nedkaz()
{
  ctx.beginPath();
  ctx.clearRect(0,0,10,10);
}
var a = document.getElementById("kreslim1");
var ctx1 = a.getContext("2d");
function udkaz1()
{
ctx1.beginPath();
ctx1.arc(5,5,4,0,2*Math.PI);
ctx1.fillStyle = "purple";
ctx1.fill();
ctx1.stroke();
}
function nedkaz1()
{
ctx1.beginPath();
ctx1.clearRect(0,0,10,10);
}
var a = document.getElementById("kreslim2");
var ctx2 = a.getContext("2d");
function udkaz2()
{
ctx2.beginPath();
ctx2.arc(5,5,4,0,2*Math.PI);
ctx2.fillStyle = "purple";
ctx2.fill();
ctx2.stroke();
}
function nedkaz2()
{
ctx2.beginPath();
ctx2.clearRect(0,0,10,10);
}
var a = document.getElementById("kreslim3");
var ctx3 = a.getContext("2d");
function udkaz3()
{
ctx3.beginPath();
ctx3.arc(5,5,4,0,2*Math.PI);
ctx3.fillStyle = "purple";
ctx3.fill();
ctx3.stroke();
}
function nedkaz3()
{
ctx3.beginPath();
ctx3.clearRect(0,0,10,10);
}
var a = document.getElementById("kreslim4");
var ctx4 = a.getContext("2d");
function udkaz4()
{
ctx4.beginPath();
ctx4.arc(5,5,4,0,2*Math.PI);
ctx4.fillStyle = "purple";
ctx4.fill();
ctx4.stroke();
}
function nedkaz4()
{
ctx4.beginPath();
ctx4.clearRect(0,0,10,10);
}
