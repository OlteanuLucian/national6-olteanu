console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});


const breedsURL = "https://dog.ceo/api/breeds/list/all";


async function start() {
  const response = await fetch(breedsURL)
  const data = await response.json()
  console.log(data)
  createBreedList(data.message)
}
start();


function createBreedList(breedList) {


}
