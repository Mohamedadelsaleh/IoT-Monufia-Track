import React, { Component } from 'react'

 class ClassEx extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1 })
    }

  render() {
    return (
      <div>
        <h3> Counter : {this.state.counter}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default ClassEx;
