import React from "react";
import { connect } from 'react-redux';
import { addAction, subtractAction } from '../state/actions/calcAction';
import "../styles.css";

const Calc = ({ count, add, subtract }) => (
    <div className="App">
        <textarea rows="1" value={count} id="total" name="ans" readOnly />
        <br />
        <button type="button" className="btn" onClick={() => add(1)}>+ 1</button>
        <button type="button" className="btn" onClick={() => add(3)}>+ 3</button>
        <button type="button" className="btn" onClick={() => subtract(1)}>- 1</button>
    </div>
);

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    add: (value) => dispatch(addAction(value)),
    subtract: (value) => dispatch(subtractAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calc);