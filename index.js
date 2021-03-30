console.log(window.open);

document.getElementById("open").addEventListener("click", ()=>{
    window.open("https://www.google.com")//la click deschide o noua fereastra
});

document.getElementById("close").addEventListener("click", ()=>{
    window.close("https://www.google.com")
});//la click inchide tab-ul


setTimeout(() => {
    console.log("focus");
    window.focus()
}, 3000);

window.addEventListener("load", ()=>{
    console.log("all is loaded");
});

window.addEventListener("resize", (event) => {
    console.log(event);//cand se face resize la pagina event is triggered
});


document.getElementById("redirect").addEventListener("click",() => {
    window.location = "https://google.com"
});


