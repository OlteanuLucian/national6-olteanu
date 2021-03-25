console.log("Javascript OOP - Spaceship Game");

document.getElementById("generate-starship").addEventListener("click", generateStarship);
let actualStarship;

function generateStarship(){
    actualStarship = new Spaceship();
}