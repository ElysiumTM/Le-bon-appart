let voitures = document.getElementsByClassName("details-voiture");

for (let i = 0; i < voitures.length; i++) 
{
  let voiture = voitures[i];
  voiture.image = 1;

  let nom = voiture.id;
  let boutonPrecedent = voiture.children[0].children[0];  
  let image = voiture.children[0].children[1];
  let boutonSuivant = voiture.children[0].children[2];

  boutonPrecedent.addEventListener('click', function() 
  {
    voiture.image = (voiture.image - 1) % 4;
    image.src = "../img/vehicule" + voiture.image + ".png";
  })

  boutonSuivant.addEventListener('click', function() 
  {
    voiture.image = (voiture.image + 1) % 4;
    image.src = "../img/vehicule" + voiture.image + ".png";
  })
}