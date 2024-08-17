# The redux-legacy

```
/redux-legacy
├── src 
│  ├── components
│  │    └── Calc.js
│  ├── state
│  │    ├── actions
│  │    │    └── calcActions.js
│  │    └── reducers
│  │         ├── index.js
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
    console.log(state); // Correct place to log the state
    return { count: state.counter.count }; // Ensure this path matches your state structure
};

const mapDispatchToProps = {
    
    addAction,
    subtractAction
};

console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
```

`src/state/actions/calcActions.js`
```js
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const addAction = (value) => {
    return { type: ADD, payload: value }
};

export const subtractAction = (value) => {
    return { type: SUBTRACT, payload: value }
};
```

`src/state/reducers/calcReducer.js`
```js
import { ADD, SUBTRACT } from '../actions/calcAction';

const initialState = { count: 0 };

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + action.payload };
        case SUBTRACT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

export default calcReducer;
```

`src/state/reducers/index.js`
```js
import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
const rootReducer = combineReducers({
  counter: calcReducer
});

export default rootReducer;
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
```css
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
import { createStore } from 'redux';
import rootReducer from './state/reducers';

const store = createStore(rootReducer);

import Calc from "./components/Calc";

const container = document.getElementById("root");
const root = createRoot(container)

root.render(<App />);

function App() {
    return (
        <Provider store={store}>
            <Calc />
        </Provider>
    );
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
