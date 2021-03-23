//START
console.log('to do app');

//variables
const toDoContainer = document.querySelector('.to-do-container');
const writeItem = document.getElementById('write-item');
const addItem = document.getElementById('add-img');
const payload = {
	id: "lolteanu",
	todo: []
};

//listeners
window.addEventListener('load', getData);
addItem.addEventListener('click', dispatchItem);

//functions
function getData() {
	fetch("https://simple-json-server-scit.herokuapp.com/todo/lolteanu")
		.then((r) => r.json())
		.then(renderToDoList)
		.catch(() => { })
}

function renderToDoList(response) {
	cleanToDo();
	payload.todo = response.todo;

	if (payload.todo === undefined || payload.todo.length === 0) {
		return;
	}

	for (const element of response.todo) {
		const taskContainer = document.createElement('div');
		toDoContainer.insertBefore(taskContainer, toDoContainer.lastElementChild);
		taskContainer.classList.add('output-container');

		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.classList.add('checkbox-element');

		const item = document.createElement('h3');

		const deleteButton = document.createElement('img');
		deleteButton.setAttribute('src', 'trash.png');
		deleteButton.classList.add('delete-img');

		taskContainer.appendChild(checkbox);
		taskContainer.appendChild(item);
		taskContainer.appendChild(deleteButton);

		item.innerText = element.item;
		writeItem.value = '';

		if (element.checked === true) {
			checkbox.checked = true;
		}

		checkbox.addEventListener('click', function () {
			if (this.checked) {
				const task = this.nextSibling.innerText;
				for (const itemElement of payload.todo) {
					if (task === itemElement.item) {
						itemElement.checked = true;
					}
				}
			} else {
				const task = this.nextSibling.innerText;
				for (const itemElement of payload.todo) {
					if (task === itemElement.item) {
						itemElement.checked = false;
					}
				}
			}

			fetch("https://simple-json-server-scit.herokuapp.com/todo/lolteanu", {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			}).then(getData);
		});

		deleteButton.addEventListener('click', function () {
			const task = this.previousSibling.innerText;
			for (const itemElement of payload.todo) {
				if (task === itemElement.item) {
					const indexOfItem = payload.todo.indexOf(itemElement);
					taskContainer.remove();
					payload.todo.splice(indexOfItem, 1);

					fetch("https://simple-json-server-scit.herokuapp.com/todo/lolteanu", {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload)
					}).then(getData);
				}
			}
		});
	}
}


function dispatchItem() {
	if (payload.todo === undefined) {
		payload.todo = [
			{
				checked: false,
				item: writeItem.value
			}
		];

		fetch("https://simple-json-server-scit.herokuapp.com/todo", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		}).then(getData);
	} else {
		payload.todo.unshift(
			{
				checked: false,
				item: writeItem.value
			}
		);
		fetch("https://simple-json-server-scit.herokuapp.com/todo/lolteanu", {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		}).then(getData);
	}
}


function cleanToDo() {
	const divList = document.querySelectorAll('.output-container');

	for (const elem of divList) {
		elem.remove();
	}
}


//END