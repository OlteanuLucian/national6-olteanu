import { getToDoData, updateUserData, createUserData } from "./utils/api";

console.log("To Do App");

const ADD_NEW_USER_URL = "https://simple-json-server-scit.herokuapp.com/todo";
const UPDATE_TO_USER_URL =
    "https://simple-json-server-scit.herokuapp.com/todo/sradusi";

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

getToDoData((json) => {
    console.log(json);

    if (json.id === "sradusi") {
        todo = json.todo;
        userExist = true;
    }
});

document.getElementById("add-task-button").addEventListener("click", () => {
    if (userExist) {
        // update user data
        console.log("add task to todo list");
        const itemValue = inputTask.value;
        if (itemValue) {
            console.log(todo);
            todo.push({
                checked: false,
                item: itemValue,
            });
            updateUserData(todo, () => { });
        }
    } else {
        // add user to server
        const itemValue = inputTask.value;
        if (itemValue) {
            createUserData(itemValue, () => { });
        }
    }
});

