import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  const [titleValue, setTitleValue] = useState();
  const [amountValue, setAmountValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [hideForm, setHideForm] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    // const idValue = Math.round(Math.random() * 1000000);
    const dataObj = {
      // id: idValue,
      title: titleValue,
      amount: amountValue,
      date:new Date(dateValue)
    };
   //console.log(dataObj);
    axios.post("http://localhost:5005/record/add",dataObj);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
    alert("Add Sucessfully Data");
    setHideForm(false);
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formHandler} className={`${hideForm === false ? "hide" : "show"}`}>
          <div className="wrapper">
            <div className="column flex1">
              <label htmlFor="title">Title : </label>
              <input type="text" id="title" value={titleValue} 
              onChange={(e) => setTitleValue(e.target.value)} required/>
            </div>

            <div className="column flex1">
              <label htmlFor="amount ">Amount :</label>
              <input
                type="number"
                id="amount"
                value={amountValue}
                onChange={(e) => setAmountValue(e.target.value)}
                required
              />
            </div>

            <div className="column flex1">
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                id="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                required
              />
            </div>
            <div className="column position">
              <button type="submit" id="button" value="Add Expence">
                Add Expense
              </button>
            </div>
          </div>
        </form>

        <button
          onClick={() => {
            setHideForm(true);
          }}
          className={`addExpense ${hideForm === true ? "hide" : "show"}`}
        >
          Add Expense
        </button>
      </div>
    </>
  );
}
