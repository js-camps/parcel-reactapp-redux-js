import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract } from '../state/reducers/calculatorSlice';
import "../styles.css";

function Calc() {
    const count = useSelector((state) => state.calculator.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <textarea rows="1" value={count} id="total" name="ans" readOnly/>
            <div className="button-group">
                <button type="button" className="btn" onClick={() => dispatch(add(1))}>+ 1</button>
                <button type="button" className="btn" onClick={() => dispatch(add(3))}>+ 3</button>
                <button type="button" className="btn" onClick={() => dispatch(subtract(1))}>- 1</button>
            </div>
        </div>
    );
}

export default Calc;