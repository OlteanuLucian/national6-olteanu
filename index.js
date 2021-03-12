console.log("JavaScript - AJAX");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", function () {
	fetch("https://simple-json-server-scit.herokuapp.com/posts")
		.then(handleFetchResponse)
		.then(useJSONResponse);
});

function handleFetchResponse(response) {
	console.log("response", response);
	return response.json();
}

function useJSONResponse(json) {
	console.log(json);
	renderArticles(json);
}

function renderArticles(articleList) {
	articleListHtml.innerText = "";
	for (const articleData of articleList) {
		console.log(articleData);
		renderArticle(articleData);
		getUserComms(articleData.id); //introducing comments
	}
}

function renderArticle(articleData) {
	const article = document.createElement("div");
	const articleTitle = document.createElement("h3");
	const articleContent = document.createElement("p");
	const commentsList = document.createElement("div"); //variable for comms container

	article.appendChild(articleTitle);
	article.appendChild(articleContent);

	articleListHtml.appendChild(article);

	articleTitle.innerText = articleData.title;
	articleContent.innerText = articleData.content;

	commentsList.classList.add("comments-list"); //adding class for comms rendering
	article.appendChild(commentsList);
}

function getUserComms(commentData) {
	fetch(
		"https://simple-json-server-scit.herokuapp.com/comments?postId=" +
			commentData
	) //fetching comments source url
		.then(handleFetchComms) //HTTP response contained in a returned promise
		.then(useJSONComms); ////JSON method =>extracts the JSON body content from the http response; function declared below
}

function handleFetchComms(response) {
	console.log("Response", response);
	return response.json();
}

function useJSONComms(json) {
	console.log(json);
	renderComms(json); //function declared below
}

function renderComms(commsTextList) {
	for (const commsText of commsTextList) {
		renderComms(commsText);
	}
}

function renderComms (commsText){ //function to render comms in DOM
  const containerList = document.querySelectorAll(".comments-list")
  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.style.padding="0px 0px 0px 20px";

  const commPostUser = document.createElement("h4");
  commPostUser.classList.add("comment-user");
  
  const commContent = document.createElement("p");
  commContent.classList.add("comment-content");

  containerList[commsText.postId].appendChild(comment);
  comment.appendChild(commPostUser);
  comment.appendChild(commContent);

  commPostUser.innerText = commsText.username;
  commContent.innerText = commsText.content;
}