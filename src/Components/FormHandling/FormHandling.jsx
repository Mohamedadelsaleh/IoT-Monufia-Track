import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            reviews: '',
            gender: 'Male'
        }
    }


    handleUserNameChange = (event) => {
        console.log(event);
        this.setState({ username: event.target.value  })
    }


    handleReviews = (event) => {
        this.setState({
            reviews: event.target.value
        })
    }


    handleGenderChange= (event) => {
        this.setState({
            gender: event.target.value
        }, () => {console.log(this.state);})
       
    }

    handleSubmit=(event) => {
        alert(`username is ${this.state.username}, reviews is ${this.state.reviews}, Gender is ${this.state.gender}`);
        event.preventDefault();
    }

    render() {
        const {username, reviews, gender} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={username} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Reviews</label>
                    <textarea value={reviews} onChange={this.handleReviews}></textarea>
                </div>
                <div>
                    <label>Gender</label>
                    <select value={gender} onChange={this.handleGenderChange} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default FormHandling;