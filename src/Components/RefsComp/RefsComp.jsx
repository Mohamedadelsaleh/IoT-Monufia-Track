import React, { Component } from 'react'

 class RefsComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : "Aya Mosa"
        }
        this.inputRef = React.createRef(); 
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

  render() {
    return (
      <div>
            <input type="text" value={this.state.username} ref={this.inputRef} />
      </div>
    )
  }
}

export default RefsComp;