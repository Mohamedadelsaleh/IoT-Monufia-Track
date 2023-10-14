import { Component } from 'react';

class ConditionalRendering extends Component {

    constructor(props) {
        super(props);
        this.state= {
            isLoggedin: true,
        }
    }

    render() {

        // Way One :

        // if(this.state.isLoggedin){
        //     return (
        //         <div>
        //             <h2>You'r Logged-in</h2>
        //         </div>
        //     )
        // }else {
        //     return (
        //         <div>
        //             <h2>Still Guest </h2>
        //         </div>
        //     )
        // }

        // ***************************************************************************

        // Way Two : element variables

        // let message;


        // if(this.state.isLoggedin){
        //     message = <h2>You'r Logged-in</h2>
        // }else {
        //     message = <h2>Still Guest</h2>
        // }

        // ************************************************************************************************

        // way Three : Ternery Operator 
           // (condition) ? true : false
           // (condition) ? true : (condition) ? true : (coditon) ? true : false

        // ************************************************************************************
        
        // way Four: Short Circut

        // ( condition && output )

        return (
            <div>
                { /* this.state.isLoggedin ? (<h1>You'r Logged-in</h1>) : (<h2>Still Guest</h2>) */ }
                { (this.state.isLoggedin  && (<h1>You'r Logged-in</h1>))}
                { !this.state.isLoggedin  && (<h2>Still Guest</h2>) }
            </div>
        )
    }
}

export default ConditionalRendering;
