let carousel = document.getElementById("carousel");
let index = 1;

setInterval(function() 
{
  index = (index % 3) + 1;
  let backgroundName = "../img/merco" + index + '.jpg';
  carousel.style.backgroundImage = "url('" + backgroundName + "')";
}, 15000)