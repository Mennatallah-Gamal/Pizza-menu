import React from "react";

const Pizza = (props) => {
  const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="pizza image" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default Pizza;
