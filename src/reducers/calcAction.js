export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const addAction = (state, value) => {
    return { count: state.count + value };
};

export const subtractAction = (state, value) => {
    return { count: state.count - value };
};
