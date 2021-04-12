console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

//---variables and listeners---
let currentBreedImage = [];
const breedsURL = "https://dog.ceo/api/breeds/list/all";
document.getElementById("backward").addEventListener("click", backwardImage);
document.getElementById("forward").addEventListener("click", forwardImage);


//---fetch---
fetch(breedsURL)
  .then(handleFetchResponse)
  .then(renderBreeds)

//---functions and callbacks---
function handleFetchResponse(response) {
  return response.json();
}

function renderBreeds(breedsList) {
  for (const breed of Object.keys(breedsList.message)) {
    renderBreed(breed);
  }
  if (localStorage.breed && localStorage.index) {
    document.getElementById(localStorage.breed).classList.add("breed--selected");
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
    fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
      .then(handleFetchResponse)
      .then(renderImage)
  }
}

function renderBreed(dogBreed) {
  const breedName = document.createElement("p");
  breedName.innerText = dogBreed;
  breedName.setAttribute("id", dogBreed);
  breedName.addEventListener("click", selectBreed);
  document.getElementById("breeds").appendChild(breedName);
}

function selectBreed() {
  if (document.querySelector(".breed--selected")) document.querySelector(".breed--selected").classList.remove("breed--selected");
  localStorage.setItem("index", 0);
  document.getElementById("page-number").innerText = "";
  document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
  localStorage.setItem("breed", this.id);
  this.classList.add("breed--selected");
  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then(handleFetchResponse)
    .then(renderImage)
}

function renderImage(imageResponseMessage) {
  currentBreedImage = imageResponseMessage.message;
  if (localStorage.index) {
    document.getElementById("breed-image").setAttribute("src", currentBreedImage[localStorage.index]);
  } else document.getElementById("breed-image").setAttribute("src", currentBreedImage[0]);
}

function backwardImage() {
  if (document.querySelector(".breed--selected")) {
    if (localStorage.index >= 1) {
      localStorage.index--;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
    document.getElementById("breed-image").setAttribute("src", currentBreedImage[localStorage.index]);
  }
}

function forwardImage() {
  if (document.querySelector(".breed--selected")) {
    if (localStorage.index < currentBreedImage.length - 1) {
      localStorage.index++;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
    document.getElementById("breed-image").setAttribute("src", currentBreedImage[localStorage.index]);
  }
}