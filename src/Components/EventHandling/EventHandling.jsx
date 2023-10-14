import { Component } from "react";

class EventHandling extends Component {


    constructor(props) {
        super(props);
        this.state= {
            message: "Welcome Guest"
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage =() => {
        this.setState({message: 'WELOCME USER'})
        console.log(this);
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changeMessage.bind(this)}>Login</button> */}
                {/* <button onClick={()=> this.changeMessage()}>Login</button> */}
                {/* <button onClick={this.changeMessage}>Login</button> */}
                <button onClick={this.changeMessage}>Login</button>
            </div>
        )
    }
}

export default EventHandling;