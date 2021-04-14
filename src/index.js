import { renderBreeds, forwardImage, backwardImage } from "./breeds";
import { getBreedListFromServer } from "./utils/api";
import { logOut } from "./utils/storage";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}
document.getElementById("logout").addEventListener("click", logOut);
document.getElementById("backward").addEventListener("click", backwardImage);
document.getElementById("forward").addEventListener("click", forwardImage);
getBreedListFromServer(renderBreeds);
