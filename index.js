console.log("JavaScript-Cookies & Local Storage");

<<<<<<< Updated upstream
console.log(document.cookie);

//document.cookie = "test=123";

if(!document.cookie) {
=======
if(!localStorage.getItem("name") || ! localStorage.getItem("password")) {
>>>>>>> Stashed changes
    window.location = "/login.html";
}

if(document.cookie) {
    const cookiesElements = document.cookie.split("; ");
    console.log(cookiesElements);
    const cookieObject = {};
    for (const element of cookiesElements) {
        const [key, value] = element.split("=");
        cookieObject[key] = value;
        console.log(key, value);
    }
    console.log(cookieObject);

    if(!cookieObject.name || !cookieObject.password){
        window.location = "/login.html";
    }
}

document.getElementById("logout").addEventListener("click",()=> {
    document.cookie = "name=jhlnjgkh; Expires=Wed, 31 Oct 1990 07:28:00 GMT";
    window.location ="/"// "/"" = root
    document.cookie = "password=123; Expires=Wed, 31 Oct 1990 07:28:00 GMT";
    window.location ="/"// "/"" = root
});