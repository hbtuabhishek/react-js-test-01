import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const getDataFromLS = () => {
  const data = localStorage.getItem("food");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const FoodOrderForm = (props) => {
  const [food, setFood] = useState(getDataFromLS());
  const [enteredOrderId, setEnteredOrderId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDish, setEnteredDish] = useState("");
  const [enteredTable, setEnteredTable] = useState("");

  const orderChangeHandler = (event) => {
    event.preventDefault();
    const fooddata = {
      enteredOrderId,
      enteredPrice,
      enteredDish,
      enteredTable,
    };
    setFood([...food, fooddata]);
    setEnteredOrderId("");
    setEnteredPrice("");
    setEnteredDish("");
    setEnteredTable("");
  };
  const deletefood=(enteredOrderId)=>{
    const filteredFood=food.filter((element, index) => {
      return element.enteredOrderId !== enteredOrderId
    })
setFood(filteredFood);
  }
  useEffect(() => {
    localStorage.setItem("food", JSON.stringify(food));
  }, [food]);
  return (
    <div>
      <form onSubmit={orderChangeHandler}>
        <label>Unique Order ID</label>
        <input
          type="number"
          onChange={(e) => setEnteredOrderId(e.target.value)}
          value={enteredOrderId}
        />
        <label>Choose Price</label>
        <input
          type="number"
          onChange={(e) => setEnteredPrice(e.target.value)}
          value={enteredPrice}
        />
        <label>Choose Dish</label>
        <input
          type="text"
          onChange={(e) => setEnteredDish(e.target.value)}
          value={enteredDish}
        />
        <label>Choose a Table</label>
        <select
          onChange={(e) => setEnteredTable(e.target.value)}
          value={enteredTable}
        >
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <></>
        <button type="submit">Add to bill</button>
      </form>
      {<h2>|| Orders ||</h2>}
      {food.length > 0 && <FoodItem food={food} deletefood={deletefood} />}
      <div>{food.length < 1 && "No Food!!!"}</div>
    </div>
  );
};

export default FoodOrderForm;
