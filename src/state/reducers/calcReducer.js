import { ADD, SUBTRACT } from '../actions/calcAction';

const initialState = {
  count: 0
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.payload };
    case SUBTRACT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default calcReducer;
