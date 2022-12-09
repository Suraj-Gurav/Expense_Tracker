import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from './MainPage';
import Delete from "./Delete";
import Update from "./Update";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route exact path='/delete/:userId' element={<Delete/>}/>
                <Route exact path='/update/:userId' element={<Update/>}/>
            </Routes>            
        </>
    );
};

export default Routing;