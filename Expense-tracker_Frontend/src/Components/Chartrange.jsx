import React from 'react';
import './Chartrange.css';

function chartRange(props) {
   let barheight="0%";
   if(props.maxPrice>0){
        barheight=Math.round((props.value / props.maxPrice)*100);
   }
    return (
        <>
        <div className="container2">
            <div className="bar_outer">
                <div className="bar_inner" style={{height:barheight}}>
                   
                </div>
            </div>
            <label className='bar_lebal'>{props.label}</label>
        </div>  
        </>
    );
}

export default chartRange;