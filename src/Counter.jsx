import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue, 10);
    setValue(newValue);
  };

  const handleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue, 10);
    setValue(newValue);
  };

  const handleDouble = () => {
    setValue(value * 2);
  };

  const handleNegate = () => {
    setValue(value * -1);
  };

  const handleIncrementByTen = () => {
    setValue(value + 10);
  };

  const handleDecrementByTen = () => {
    setValue(value - 10);
  };
  return (
    <div>
      <h1>Please Add or Subtract</h1>
      <div className="board">
        <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
          {value}
        </div>
        <div className="container">
          <Button
            action={() =>
              handleIncrement(document.getElementById("number").value)
            }
            symbol="+"
          />
          <Button action={() => handleIncrementByTen()} symbol={"+10"} />
          <div className="value-form">
            <input type="number" id="number" defaultValue="0" />
          </div>
          <Button
            action={() =>
              handleDecrement(document.getElementById("number").value)
            }
            symbol="-"
          />
          <Button
            action={() => {
              handleDecrementByTen();
            }}
            symbol="-10"
          />
        </div>
      </div>
      <div>
        <Button
          action={() => {
            handleDouble();
          }}
          symbol="X2"
        />
      </div>
      <div>
        <Button
          action={() => {
            handleNegate();
          }}
          symbol="-/+"
        />
      </div>
      <div>
        <Button
          action={() => {
            (document.getElementById("number").value = "0"), setValue(0);
          }}
          symbol="C"
        />
      </div>
    </div>
  );
}

export default Counter;
