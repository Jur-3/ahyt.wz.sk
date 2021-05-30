var x = document.getElementById("obra");
x.addEventListener("mouseover",zmena);
x.addEventListener("mouseout",navrat);
function zmena()
{
  document.getElementById("obra").style.transform = "rotate(20deg)";
}
function navrat()
{
  document.getElementById("obra").style.transform = "rotate(0deg)";
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
