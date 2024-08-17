# The redux - store

```
/redux-store
├── src
│   ├── components
│   │   └── Calc.js             # React component connected to Redux
│   ├── state
│   │   ├── actions
│   │   │   └── calcActions.js  # Action creators for the calculator
│   │   ├── reducers
│   │   │   └── calcReducer.js  # Reducer for handling calculator actions
│   │   └── store.js            # Redux store configuration
│   ├── index.js                # Entry point, sets up the React app with Redux
│   └── styles.css              # Styles for your application
├── .gitignore                  # Specifies intentionally untracked files to ignore
├── index.html                  # Main HTML file
├── package-lock.json           # Automatically generated for any operations where npm modifies either the node_modules tree, or package.json
├── package.json                # Node's package.json file for defining project properties
└── Readme.md                   # Project README for documentation
```

- Install Redux Dependencies
```js
npm install --save redux react-redux
```

`src/components/Calc.js`
```js
import React from "react";
import { connect } from 'react-redux';
import { addAction, subtractAction } from '../state/actions/calcActions';
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
```

`src/state/store.js`
```js
import { createStore } from 'redux';
import calcReducer from './reducers/calcReducer';

const store = createStore(calcReducer);

export default store;
```

`src/state/actions/calcActions.js`
```js
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
```

`src/state/reducers/calcReducer.js`
```js
import { ADD, SUBTRACT } from '../actions/calcActions';

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
```

`package.json`
```json
{
  "scripts": {
    "start": "parcel index.html"
  },
  "devDependencies": {
    "parcel": "^2.12.0",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "redux": "^5.0.1"
  }
}
```

`src/state/styles.css`
```js
.App {
  font-family: sans-serif;
  text-align: center;
  padding: 2em;
}

body {
  box-sizing: border-box;
  overflow-x: hidden;
  background: #574b90;
  font-family: "Lato", sans-serif;
}

.col-xs-4 {
  padding: 0;
}

.form-control {
  border-color: #6c5ce7 !important;
}

button,
textarea {
  border-radius: 0 !important;
  font-size: 24px !important;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  width: 100px;
  text-align: center;
  padding: 15px !important;
  outline: none;
  background-color: #546de5 !important;
  border-color: #6c5ce7 !important;
  color: #fff !important;
}

.btn-primary:focus,
.btn-primary,
.form-control:focus {
  box-shadow: none !important;
}

.col-xs-6 button {
  width: 150px;
}

.form-control:nth-child(1) {
  height: 150px;
}

.form-group {
  margin-bottom: 0;
}

#total {
  font-family: "Audiowide", serif;
  max-width: 50%;
  font-size: 40px !important;
}
```

`src/index.js`
```js
import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './state/store';
import Calc from "./components/Calc";

const container = document.getElementById("root");
const root = createRoot(container);

function App() {
  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  );
}

root.render(<App />);
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React: state reducer redux</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
      rel="stylesheet"
    />
    <script type="module" src="./src/index.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
