import React, { Component } from 'react'

class SideEffectClassComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }

    handleClick = () => {
        this.setState({
            counter : this.state.counter + 1 
        })
    }

    componentDidMount() {
        document.title = `Food App Clicked ${this.state.counter} times`
    }

    componentDidUpdate(){
        document.title = `Food App Clicked ${this.state.counter} times`
    }

  render() {
    return (
      <div>
            <h3>Counter : {this.state.counter}</h3>
            <button onClick={this.handleClick}> Clicked {this.state.counter}</button>
      </div>
    )
  }
}

export default SideEffectClassComp;