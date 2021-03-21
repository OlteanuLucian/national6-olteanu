console.log("To Do App");

//declare variables
const taskList = document.querySelector("#output");
const trashSvg =
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10px" height="15px" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z" fill="#8d38ab" data-original="#000000" style="" class=""/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" fill="#8d38ab" data-original="#000000" style="" class=""/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" fill="#8d38ab" data-original="#000000" style="" class=""/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" fill="#8d38ab" data-original="#000000" style="" class=""/></g></g></svg>'
 
//const addedTask = document.querySelector(".input-task").value;

document.getElementById("add-task-img").addEventListener("click", postData);


//get data as Read of CReadUD
function getData() {
	const addedTask = document.querySelector("#input-task").value;
	fetch("https://simple-json-server-scit.herokuapp.com/todo/lolteanu")
	.then((r) => r.json())
	.then((data) => {
		console.log(data);
		if (data.todo) {
			return putData(addedTask, data);
		} else {
			return postData (addedTask);
		}
	})
	.then(()=> renderTaskList());
}

//post data as Create of CreateRUD
function postData(addedTask) {
	console.log(addedTask);
	if (addedTask) {
		const payload = {
			id: "lolteanu",
			todo: [
				{
					checked: false,
					item: addedTask,
				},
			],
		}
		return fetch("https://simple-json-server-scit.herokuapp.com/todo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
	}
}

//put data as update of CRUpdateD














// function renderTaskList(/*data, key*/ payload) {
//       console.log(payload)
//       const checkbox = document.createElement('input')
//       const li = document.createElement('li');
//       const textInside = document.createTextNode(data.info);
//       const span = document.createElement('span');

//       span.innerHTML = trashSvg;
//       span.onclick = remove;
      
//       checkbox.type = 'checkbox';
//       checkbox.value = key;
//       checkbox.checked = data.status;
//       checkbox.setAttribute('onchange', 'updateJSON()');
      
//       li.appendChild(checkbox);
//       li.appendChild(textInside);
//       li.appendChild(span);
//       document.querySelector('#task-list').appendChild(li);
//   }


//   function updateJSON() {
//       let key = event.target.value;
//       dataJSON[key].status = event.target.checked;
//       sessionStorage['taskList'] = JSON.stringify(dataJSON);
//   }