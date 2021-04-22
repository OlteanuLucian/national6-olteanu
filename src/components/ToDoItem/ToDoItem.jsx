import "./ToDoItem.css";

export function ToDoItem(props) {
    console.log(props);

    return (
        <div className ="to-do-item">
            <input type="checkbox" defaultChecked={props.checkValue}/>
            <p>{props.label}</p>
            <img src="https://www.flaticon.com/svg/vstatic/svg/1632/1632602.svg?token=exp=1619107275~hmac=856c12253ff740afcb0caf5f839038e3" 
            alt="trash-bin"></img>
        </div>
    );
}