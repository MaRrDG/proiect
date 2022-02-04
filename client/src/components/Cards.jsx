import React, { Component } from 'react';
import InsertCard from './InsertCard';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            'pressed': 0,
            'id': '',
            'text': '',
        }
    }

    onPressUpdate = async (e) => {
        await this.setState({pressed: 0});
        await this.setState({id: e.target.id});
        await this.setState({pressed: 1});
    }

    onChangeText = (e) => {
        this.setState({text: e.target.value});
    }

    onSubmit = () => {
        fetch('http://localhost:3000/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                text: this.state.text
            })
        })
    }

    render() {
        const { staff } = this.props;

        return(
            <div className='lists'>
                {
                    this.state.pressed === 1 
                    ? ( 
                    <form className='update animate__flipInX'>
                        <input type="text" name="new" id="new" placeholder='New description' onChange={this.onChangeText} required/>
                        <input type="submit" value="CHANGE" onClick={this.onSubmit}/>
                    </form>
                    )
                    : false
                }

                <div className='wrapper'> {
                    staff.map((staffs, i) => {
                        return <InsertCard name={staff[i].name} desc={staff[i].desc} id={staff[i]._id} key={i} onPressUpdate={this.onPressUpdate}/> 
                    })
                } 
                </div>
            </div>
    
        )
    }

}

export default Cards;