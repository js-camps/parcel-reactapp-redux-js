# The reducer - function

```
/reducer
├── src 
│  ├── components
│  │    └── Calc.js
│  ├── state
│  │    ├── actions
│  │    │    └── calcActions.js
│  │    └── reducers
│  │         └── calcReducer.js
│  ├── index.js
│  └── styles.css
├── .gitignore 
├── index.html 
├── package-lock.json 
├── package.json 
└── Readme.md
```

`src/components/Calc.js`
```js
import React, { useReducer } from "react";
import "../styles.css";
import reducer from '../reducers/calcReducer';

function initializeState(initial) {
    return {
        count: initial.count
    };
}

function Calc() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState, initializeState);

    return (
        <div className="App">
            <textarea rows="1" value={state.count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={() => dispatch({ type: 'ADD', payload: 1 })}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => dispatch({ type: 'ADD', payload: 3 })}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => dispatch({ type: 'SUBTRACT', payload: 1 })}>
                - 1
            </button>
        </div>
    );
}

export default Calc;
```

`src/state/actions/calcAction.js`
```js
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const addAction = (state, value) => {
    return { count: state.count + value };
};

export const subtractAction = (state, value) => {
    return { count: state.count - value };
};
```

`src/state/reducers/calcReducer.js`
```js
import { ADD, SUBTRACT } from '../actions/calcAction';
import {addAction, subtractAction} from '../actions/calcAction'

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
    "react-dom": "^18.3.1"
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
import { createRoot } from "react-dom/client";
import Calc from "./components/Calc";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);

function App() {
    return (<Calc />)
}
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
