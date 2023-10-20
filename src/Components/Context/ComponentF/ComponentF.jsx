import React, { Component } from 'react'
import { UserConsumer } from '../contextData';

 class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
        {
          (value) => {
            return(
              <h6>ComponentF {value}</h6>
            )
          }
        }
        
        </UserConsumer>
        
      </div>
    )
  }
}

export default ComponentF;
