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
		getComms(articleData.id); 
	}
}

function renderArticle(articleData) {
	const article = document.createElement("div");
	const articleTitle = document.createElement("h3");
	const articleContent = document.createElement("p");
	
	article.appendChild(articleTitle);
	article.appendChild(articleContent);

	articleListHtml.appendChild(article);

	articleTitle.innerText = articleData.title;
	articleContent.innerText = articleData.content;

	const commsList = document.createElement("div"); 
	commsList.classList.add("comments-list");

	article.appendChild(commsList);
}

function getComms(dataCommParams) {
	fetch(
		"https://simple-json-server-scit.herokuapp.com/comments?postId=" +
			dataCommParams
	)
		.then(handleFetchComms)
		.then(useJSONComms);
}

function handleFetchComms(response) {
	console.log(response);
	return response.json();
}

function useJSONComms(json) {
	console.log(json);
	renderComms(json);
}

function renderComms(commsDataList) {
	for (const commsData of commsDataList) {
		renderComm(commsData);
	}
}

function renderComm(commsData) {
	const containerList = document.querySelectorAll(".comments-list");

	const comment = document.createElement("div");
	comment.classList.add("comment");
	comment.style.padding = "0px 0px 0px 20px";

	const commsUser = document.createElement("h4");
	commsUser.classList.add("comment-user");

	const commsContent = document.createElement("p");
	commsContent.classList.add("comment-content");

	containerList[commsData.postId].appendChild(comment);
	comment.appendChild(commsUser);
	comment.appendChild(commsContent);

	commsUser.innerText = commsData.username;
	commsContent.innerText = commsData.content;
}
