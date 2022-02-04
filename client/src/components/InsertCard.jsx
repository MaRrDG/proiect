import React from "react";
import { IoPersonSharp } from "react-icons/io5";

const InsertCard = ({ name, desc, id, onPressUpdate }) => {
    const onDeleteBtn = (event) => {
        fetch('http://localhost:3000/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: event.target.id
            })
        }).then(window.location.reload(true))

    }

    return(
        <div className="card animate__bounceIn" key={id}>
            <div className='photo'> 
                <IoPersonSharp /> 
            </div>
            
            <div className='name'> 
                <p>{name}</p> 
            </div>

            <div className='desc'> 
                <p>{desc}</p> 
            </div>

            <div className="update">
                <button onClick={onPressUpdate} id={id}>UPDATE</button>
            </div>

            <div className="btn">
                <button id={id} onClick={onDeleteBtn}>DELETE</button>
            </div>
        </div>  
    );
}

export default InsertCard

