import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => {
    return state.coun.value;
  });
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const handleSelectChange = (e) => {
    var criteria = e.target.value;
    var temp = incrementAmount;
    if(temp === "")
    {
      temp = 0;
    }
    temp = parseInt(temp);
    if(criteria === 'Add')
    {
      dispatch(incrementByAmount(Number(temp)))
    }
    else if(criteria === 'Subtract')
    {
      dispatch(decrementByAmount(Number(temp)))
    }
    else
    {
      return;
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <div>

          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />

          <select onClick={handleSelectChange}>
            <option value="-1">-SELECT-</option>
            <option value="Add">-Add Amount-</option>
            <option value="Subtract">Subtract Amount</option>
          </select>
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
