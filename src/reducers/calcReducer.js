import { ADD, SUBTRACT } from './calcAction';
import {addAction, subtractAction} from './calcAction';

const calcReducer = (state, action) => {
  switch (action.type) {
      case ADD:
          return addAction(state, action.payload);
      case SUBTRACT:
          return subtractAction(state, action.payload);
      default:
          return state;
  }
};

export default calcReducer;