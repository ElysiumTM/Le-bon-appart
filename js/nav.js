let boutonNav = document.getElementById("bouton-nav");

boutonNav.addEventListener('click', function() 
{
  let nav = document.getElementById("nav");
  let visible = nav.style.display == "block";

  if(visible)
  {
    nav.style.display = "none";
  }
  else 
  {
    nav.style.display = "block";
  }
})