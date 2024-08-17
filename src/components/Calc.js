import React from 'react';
import { connect } from 'react-redux';
import { addAction, subtractAction } from "../state/actions/calcAction"; // Make sure the file name is correct

import "../styles.css";

function Calc({ count, addAction, subtractAction }) {
    return (
        <div className="App">
            <textarea rows="1" value={count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={() => addAction(1)}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => addAction(3)}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => subtractAction(3)}>
                - 3
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { count: state.counter.count }; // Ensure this path matches your state structure
};

const mapDispatchToProps = {
    
    addAction,
    subtractAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);