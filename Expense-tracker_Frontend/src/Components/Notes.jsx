import React from 'react';
import Date from './Date';
import './Notes.css';
import Filter from './Filter';
import { useState } from 'react';
import Avaragebarcal from './Avaragebarcal';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Notes= () => {

    const [finalData,setFinalData]=useState([]);
    //get all data using API
    useEffect(()=>{
      axios.get("http://localhost:5005/record")
      .then(async (res)=>{
        const data = await res.data;
      //  console.log(data);
        setFinalData(data);
      })
      .catch((err)=>{console.log(err);});
    },[]);

    //filter Component funtion got filter year
  const [selectedYear,setSelectedYear]=useState();
  const filteredValue=(filterYear)=>{
    setSelectedYear(filterYear);  
  }
  
  
  // //filter data 
  let filterRecords = finalData.filter(row =>{
    const fdate = moment(row.date).format("YYYY")
      if(selectedYear === "All"){
        return(row);
      }else{
        return(fdate === selectedYear)
      } 
    });
    
  return (
    <>
      <div className="container1">
      <Filter finalData={finalData} filteredValue={filteredValue}/>
      <Avaragebarcal filterRecords={filterRecords}/>
        {
       filterRecords.reverse().map(row =>{
            return(
              <div className="record">
                <Date row={row}/>
                <div className="note">                 
                  <h2>{row.title}</h2>              
                </div>
                <div className='button'>
                  <NavLink exact to={`update/${row._id}`}><button className='btn1'>Update</button></NavLink>
                  <NavLink exact to={`delete/${row._id}`}><button className='btn1'>Delete</button></NavLink>
                </div>
                <div className="price">
                  <p>${row.amount}</p>
                </div>
              </div>
            )
        })
      }
    </div>
    </>  
  )
}

export default Notes;