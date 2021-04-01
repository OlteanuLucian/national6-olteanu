console.log("JavaScript-Cookies & Local Storage");

console.log(document.cookie);

document.getElementById("logout").addEventListener("click",()=> {
    document.cookie = "password=123Luc; Expires=Wed, 21 Oct 2015 07:28:00 GMT";
    window.location ="/"// "/"" = root
})