import { Component } from "react";

class CompPropsClass extends Component {
    render() {
        this.props.age=30; 
        return (
            <h3>Hello IoT Track, this is {this.props.name} my Age is {this.props.age * 3}</h3>
        )
    }
}

export default CompPropsClass