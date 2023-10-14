import { Component } from "react";

class ClassComponentState extends Component {

    constructor(){
        super();
        this.state={
            message: "Hello Visitor",
            name:"Ahmed "
        };
    }

    changeMessage(){
        this.setState({message: "Hello User from setState"}, ()=> {console.log(this.state.message)} )
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}, {this.state.name}</h2>
                <button onClick={()=> this.changeMessage()}>Subscription</button>
            </div>
        )
    }
};

export default ClassComponentState;