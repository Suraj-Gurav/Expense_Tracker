import React from 'react';
import Chartrange from './Chartrange';
import './Avaragebarcal.css';
import moment from 'moment';

const Avaragebarcal = (props) => {
    let barRangeData=[
        {label:"Jan", price:0}, 
        {label:"Feb", price:0},
        {label:"Mar", price:20},
        {label:"Apr", price:10},
        {label:"May", price:0},
        {label:"Jun", price:0},
        {label:"Jul", price:0},
        {label:"Aug", price:0},
        {label:"Sep", price:0},
        {label:"Oct", price:0},
        {label:"Nov", price:0},
        {label:"Dec", price:0}  
    ];

    for(let record of props.filterRecords){
            let month=moment(record.date).month();         
        try{     
            barRangeData[month].price =record.amount; 
        }catch(err){
            console.log(err);
        }       
    }

    let arrayPrice=props.filterRecords.map(row=>row.amount);
    let maxPrice=Math.max(...arrayPrice);
    return (
        <div className="flex">
            {
                barRangeData.map(row=>{
                    return(
                        <div className='bgColorBar'>
                            <Chartrange label={row.label} value={row.price} maxPrice={maxPrice}/>
                        </div>
                    )
                })
            }    
        </div>
    );
};

export default Avaragebarcal;