
import React, {Component} from "react" 
import "./Form.css"
 
// export function Form () {
//     return <div className = "app-form"/>;
        
    
// }

class Form extends Component {
    render() {
        return (
           <form>
               <div>
               <div>
                    <label>FIRST NAME</label>
                    <input type="text"/>
                </div> 
                <div>
                    <label>LAST NAME</label>
                    <input type="text"/>
                </div> 
                <div>
                    <label>EMAIL</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>MESSAGE</label>
                    <input type="text"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
                </div> 
           </form>
        )
    }
}



export default Form
