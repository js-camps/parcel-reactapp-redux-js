import React, { useReducer } from "react";
import "../styles.css";

import reducer from '../reducers/calcReducer';

function initializeState(initial) {
    return {
        count: initial.count
    };
}

function Calc() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState, initializeState);

    return (
        <div className="App">
            <textarea rows="1" value={state.count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={() => dispatch({ type: 'ADD', payload: 1 })}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => dispatch({ type: 'ADD', payload: 3 })}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => dispatch({ type: 'SUBTRACT', payload: 1 })}>
                - 1
            </button>
        </div>
    );
}

export default Calc;