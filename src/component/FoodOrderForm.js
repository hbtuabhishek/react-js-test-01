import React, { useState } from "react";

const FoodOrderForm = (props) =>{
    const [enteredOrderId, setEnteredOrderId] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDish, setEnteredDish] = useState("");
    const [enteredTable, setEnteredTable] = useState("");

    const orderChangeHandler = (event) => {
        setEnteredOrderId(event.target.value);
      };
    
      const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
      };
    
      const dishChangeHandler = (event) => {
        setEnteredDish(event.target.value);
      };

      const tableChangeHandler = (event) => {
        setEnteredTable(event.target.value);
      };

      const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
          order: enteredOrderId,
          price: enteredPrice,
          dish: enteredDish,
          table: enteredTable
        };
        props.onSaveExpenseData(expenseData);
        setEnteredOrderId('');
        setEnteredPrice('');
        setEnteredDish('');
        setEnteredTable('');
      };
    return(
        <form onSubmit={submitHandler}>
        <label>Unique Order ID</label>
        <input type="number" value={enteredOrderId} onChange={orderChangeHandler}/>
        <label>Choose Price</label>
        <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
        <label>Choose Dish</label>
        <input type="text" value={enteredDish} onChange={dishChangeHandler}/>
        <label>Choose a Table</label>
        <select value={enteredTable} onChange={tableChangeHandler}>
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
        </select>
        <button>Add to bill</button>
        </form>
    );
};

export default FoodOrderForm;