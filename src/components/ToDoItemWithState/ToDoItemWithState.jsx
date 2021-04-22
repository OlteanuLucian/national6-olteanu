import {Component} from "react";

export class ToDoItemWithState extends Component {
    state = {
        noOfClicks:0,
    };

    handleClickIncrease = () => {
        console.log("clicked on item");
        this.setState({noOfClicks: 1});
    };

    render () {
        return(
            <div className ="to-do-item" onClick = {this.handleClickIncrease} >
            <input type="checkbox" defaultChecked={this.props.checkValue}/>
            <p>{this.props.label}</p>
            <img 
            src="https://www.flaticon.com/svg/vstatic/svg/1632/1632602.svg?token=exp=1619107275~hmac=856c12253ff740afcb0caf5f839038e3" 
            alt="trash-bin"></img>
            <p>{this.state.noOfClicks}</p>
        </div>
        );
    }
}
