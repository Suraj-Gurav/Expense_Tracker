import React from 'react';
import "./MainPage.css"
import Notes from './Notes';
import Form from './Form';

const MainPage = () => {
    return (
        <>
          <div className="mainBody">
          <div className="bgColorForm">
            <Form/>
          </div>
          <div className="bgColorNote">
            <Notes/>
          </div>
        </div>
  
        </>
    );
};

export default MainPage;