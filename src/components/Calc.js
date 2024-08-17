import React, { useReducer } from "react";
import "../styles.css";

import g from '../reducers/incDecReducer';

function Calc() {
  const initialState = { count: 0 };
  const [state, f] = useReducer(g, initialState);

  const handleIncrement = () => {
    f({type: 'increment'})
  };

  return (
    <div className="App">
      <textarea rows="1" value={state.count} id="total" name="ans" readOnly />
      <br />
      <button type="button" className="btn" onClick={handleIncrement}>
        + 1
      </button>
      <button type="button" className="btn" onClick={() => f({type: 'addThree' })}>
        + 3
      </button>
      <button type="button" className="btn" onClick={() => f({type: 'decrement' })}>
        - 1
      </button>
    </div>
  );
}

export default Calc;