import axios from 'axios';
import React,{useState} from 'react';
import { NavLink,useParams } from 'react-router-dom';
import "./Update.css"

const Update = () => {
    const {userId}=useParams();
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();
    const [date,setDate]=useState();

    const updateData=async (e)=>{
        e.preventDefault();
        const dataObj = {
            title: title,
            amount: amount,
            date:new Date(date)
        };
        console.log(dataObj);
        await axios.put(`http://localhost:5005/record/${userId}`,dataObj);
        alert("Update Data Successfully");
        setTitle("");
        setAmount("");
        setDate("");
    }
    return (
        <>
          <div className="main">
                    <form className='child' onSubmit={updateData}>
                        <h1>Update Expens Data</h1>
                        <div className='line'>
                            <label htmlFor="title">Title</label>
                            <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}}/>  
                        </div>
                        <div className='line'>
                            <label htmlFor="amount">Amount</label>
                            <input type="text" value={amount} onChange={e=>{setAmount(e.target.value)}}/> 
                        </div>
                         <div className='line'>
                            <label htmlFor="date">Date</label>
                            <input type="date" value={date} onChange={e=>{setDate(e.target.value)}}/>  
                         </div>
                       <div className='line'>
                            <button type="submit">Submit</button>
                           <NavLink exact to="/"><button>Back</button></NavLink>
                       </div>
                       
                    </form>    
          </div>  
        </>
    );
};

export default Update;