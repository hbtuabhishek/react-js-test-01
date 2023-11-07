import React from "react";
const FoodItem = ({ food, deletefood}) => {
  return food.map((food) => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>PRICE</th>
          <th>DISH</th>
          <th>TABLE</th>
        </tr>
      </thead>
      <tbody>
        <tr key={food.enteredOrderId}>
          <td>{food.enteredOrderId}</td>
          <td>{food.enteredPrice}</td>
          <td>{food.enteredDish}</td>
          <td>{food.enteredTable}</td>
          <button onClick={()=> deletefood(food.enteredOrderId)}>Delete</button>
        </tr>
      </tbody>
    </table>
  ));
};
export default FoodItem;
