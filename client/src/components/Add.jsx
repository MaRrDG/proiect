import React, { Component } from "react";

class Add extends Component {
    constructor() {
        super()
        this.state = {
            'name': '',
            'desc': ''
        }
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    onChangeDesc = (event) => {
        this.setState({desc: event.target.value});
    }

    onSubmit = () => {
        fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                desc: this.state.desc
            })
        })
    }

    render() {
        return(
            <div>
                <form className="add-container animate__flipInX">
                    <input type="text" name="name" id="name" placeholder="Name" onChange={this.onChangeName} required/>
                    <input type="text" name="Description" id="Description" placeholder="Description" onChange={this.onChangeDesc} required/>
                    <input type="submit" value="SUBMIT" onClick={this.onSubmit}/>
                </form>
            </div>
        )
    }

}

export default Add