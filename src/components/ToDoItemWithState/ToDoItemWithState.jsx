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
            src="https://www.flaticon.com/svg/vstatic/svg/3096/3096750.svg?token=exp=1618938506~hmac=0b38feb3b490026803f83d3b87074626" 
            alt="trash-bin"></img>
            <p>{this.state.noOfClicks}</p>
        </div>
        );
    }
}
