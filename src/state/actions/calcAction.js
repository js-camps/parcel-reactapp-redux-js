export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const addAction = (value) => ({
  type: ADD,
  payload: value
});

export const subtractAction = (value) => ({
  type: SUBTRACT,
  payload: value
});
