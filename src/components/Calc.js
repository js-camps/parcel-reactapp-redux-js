import React from 'react';
import { connect } from 'react-redux';
import { addAction, subtractAction } from "../state/actions/calcAction"; // Make sure the file name is correct

import "../styles.css";

function Calc({ count, add, subtract }) {
    return (
        <div className="App">
            <textarea rows="1" value={count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={() => add(1)}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => add(3)}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => subtract(3)}>
                - 3
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { count: state.counter.count }; // Ensure this path matches your state structure
};

const mapDispatchToProps = (dispatch) => ({
    add: (value) => dispatch(addAction(value)),
    subtract: (value) => dispatch(subtractAction(value))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Calc);