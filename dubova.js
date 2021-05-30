var poslMiesto = window.pageYOffset;
window.onscroll = function()
{
  var terazMiesto = window.pageYOffset;
  if(poslMiesto > terazMiesto)
  {
    document.getElementById("navbar").style.top = "0";
  }
  else
  {
    document.getElementById("navbar").style.top = "-100px";
  }
  poslMiesto = terazMiesto;
}

var vokne = document.getElementById("mneVokne1");
var obraz = document.getElementById("mojObraz1");
var vokneObraz = document.getElementById("obraz1");
obraz.onclick = function(){vokne.style.display = "block";vokneObraz.src = "ob1.jpg";}
var rozpatie = document.getElementsByClassName("zavriet")[0];
rozpatie.onclick = function(){vokne.style.display = "none";}

var vokne = document.getElementById("mneVokne2");
var obraz = document.getElementById("mojObraz2");
var vokneObraz = document.getElementById("obraz2");
obraz.onclick = function(){vokne.style.display = "block";vokneObraz.src = "ob2.jpg";}
var rozpatie = document.getElementsByClassName("zavriet")[1];
rozpatie.onclick = function(){vokne.style.display = "none";}

var vokne = document.getElementById("mneVokne3");
var obraz = document.getElementById("mojObraz3");
var vokneObraz = document.getElementById("obraz3");
obraz.onclick = function(){vokne.style.display = "block";vokneObraz.src = "ob4.jpg";}
var rozpatie = document.getElementsByClassName("zavriet")[2];
rozpatie.onclick = function(){vokne.style.display = "none";}

var vokne = document.getElementById("mneVokne4");
var obraz = document.getElementById("mojObraz4");
var vokneObraz = document.getElementById("obraz4");
obraz.onclick = function(){vokne.style.display = "block";vokneObraz.src = "ob5.jpg";}
var rozpatie = document.getElementsByClassName("zavriet")[3];
rozpatie.onclick = function(){vokne.style.display = "none";}

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
