let boutons = document.getElementsByClassName("bouton-reserver");
let couleurs = ["rgb(4, 216, 4)", "blue", "red", "yellow", "orange", "purple", "grey"]

for (let i = 0; i < boutons.length; i++) 
{
  let bouton = boutons[i];
  bouton.couleur = 1;

  bouton.addEventListener('click', function() 
  {
    bouton.couleur = bouton.couleur + 1;
    bouton.style.backgroundColor = couleurs[bouton.couleur % couleurs.length];
  })
}