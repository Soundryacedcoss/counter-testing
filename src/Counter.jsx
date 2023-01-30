import React, { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h2>React Testing</h2>
      <button
        className="btn btn-outline-success"
        data-testid="increment"
        onClick={incrementCounter}
      >
        Increase
      </button>
      <br /> <br />
      <p data-testid="counter" style={{ fontSize: "2vw" }}>
        {counter}
      </p>
      <button
        className="btn btn-outline-danger"
        data-testid="decrement"
        onClick={decrementCounter}
      >
        Decrease
      </button>
    </div>
  );
};
