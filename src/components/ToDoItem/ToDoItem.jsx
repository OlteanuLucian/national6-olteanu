import "./ToDoItem.css";

export function ToDoItem() {
    return (
        <div className ="to-do-item">
            <input type="checkbox"/>
            <p>Item</p>
            <img src="https://www.flaticon.com/svg/vstatic/svg/3096/3096750.svg?token=exp=1618938506~hmac=0b38feb3b490026803f83d3b87074626" 
            alt="trash-bin"></img>
        </div>
    )
}