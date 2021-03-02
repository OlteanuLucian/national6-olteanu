console.log("Javascript - AJAX");
console.log("CRUD Operation - Create");
console.log("CreateReadUpdate")


document.getElementById("add-article-button").addEventListener("click",function(){
    
    const articleTitle = document.getElementById("article-title").value;
    console.log("articleTitle", articleTitle);
    
    const articleContent = document.getElementById("article-content").value;
    console.log("articleContent", articleContent);
    
    if(articleTitle && articleContent){
    const payload = {        
        title: articleTitle,
        content: articleContent
    };
  

    console.log("Payload: ", payload);
    console.log("Payload Text: ", JSON.stringify(payload));


    fetch("https://simple-json-server-scit.herokuapp.com/posts", {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
      }).then(getData);
    }
});