import React from 'react';
import { useState } from 'react';
import './Filter.css'

const Filter = (props) => {

   const [filterYear,setFilteryear] = useState("All");
   const yearSelected=(e)=>{
    setFilteryear(e.target.value);
   }
   props.filteredValue(filterYear);
    return (
        <>
        <div className='option'>
        <p>Filter BY Year</p>
            <select onChange={yearSelected}>
                <option value="All">All</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
           
        </div>
        </>
    );
};

export default Filter;