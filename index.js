console.log("JavaScript - LocalStorage");


// Here will attempt the some logic as for the branch: course-21-cookies, but using local-storage
// Local-storage is similar to cookies but is easier to work with and can store more data

// checkout handleLogin to see how to set items in localStorage

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
 window.location = '/login.html';
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem('password');
  window.location = "/";
});