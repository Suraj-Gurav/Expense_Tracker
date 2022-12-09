import moment from 'moment';
import React from 'react';
import './Date.css';

const Date = (props) =>{
  
  const newDate = props.row.date;
  const year = moment(newDate).format("YYYY");
  const month = moment(newDate).format("MMM");
  const day = moment(newDate).format("DD");

return(
    <>
      <div className="date">
        <h4>{month}</h4>
        <p>{year}</p>
        <h2>{day}</h2>
      </div>
    </>
  )
}

export default Date;