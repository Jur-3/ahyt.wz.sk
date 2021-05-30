var slidIndex = 0;
showSlid(slidIndex);

function showSlid(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlid");
  var dots = document.getElementsByClassName("dot");

  for(i=0; i<slides.length; i++){slides[i].style.display = "none";}
  slidIndex++;
  if(slidIndex > slides.length){slidIndex = 1;}
for(i=0; i<dots.length; i++){dots[i].className = dots[i].className.replace("active","")};

slides[slidIndex-1].style.display = "block";
dots[slidIndex-1].className += " active";
setTimeout(showSlid, 4000);
}

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
