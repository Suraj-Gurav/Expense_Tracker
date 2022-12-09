import axios from 'axios';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import "./Delete.css"

const Delete = () => {

    const {userId}=useParams()
    const deleteExpens = () =>{
        axios.delete(`http://localhost:5005/record/${userId}`);
        alert("Expens Delete Successfully");
    }
   
    return (
        <>
        <div className='center'>
            <h1>Are You Sure Delete Expens</h1>
            <div>
                <button className='deleteBtn' onClick={deleteExpens}>Yes</button>
              <NavLink exact to="/"><button className='deleteBtn'>No</button></NavLink>
            </div>       
        </div>          
        </>
    );
};

export default Delete;