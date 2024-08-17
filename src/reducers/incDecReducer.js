const incDecfunc = (state, action) => {
    switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'addThree':
          return { count: state.count + 3 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          return state;
      }
};

export default incDecfunc;