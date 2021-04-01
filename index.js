console.log("JavaScript-Cookies & Local Storage");

console.log(document.cookie);



if(!localStorage.getItem("name")|| ! localStorage.getItem("password")) {
    window.location = "/login.html";
}



document.getElementById("logout").addEventListener("click",()=> {
  localStorage.removeItem("name")
  localStorage.removeItem("name")
  window.location ="/";
});