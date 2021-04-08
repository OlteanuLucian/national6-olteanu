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
// const selectBreed = document.getElementById ("breeds");

// fetch (breedsURL)
// .then(res => {
//   return res.json();
// })
// .then (data => {
//   const breedsObject = data.message;
//   const breedsArray = Object.keys(breedsObject);
//   // for (let i = 0; i < breedsArray.length; i++) {

//   // }
// });



async function start() {
  const response = await fetch(breedsURL)
  const data = await response.json();
  console.log(data);
}
