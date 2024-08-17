# The redux toolkit example

```
/redux-toolkit-example
├── src
│   ├── components
│   │   └── Calc.js                 # React component using Redux hooks
│   ├── state
│   │   ├── reducers
│   │   │   └── calculatorSlice.js  # Redux slice for calculator operations
│   │   └── store.js                # Redux Toolkit store configuration
│   ├── App.js                      # Main React component
│   ├── index.js                    # Entry point for React application
│   └── styles.css                  # Styles for your application
├── .gitignore                      # Specifies intentionally untracked files to ignore
├── index.html                      # Main HTML file
├── package-lock.json               # Auto-generated product of npm modifications
├── package.json                    # Project metadata and dependencies
└── Readme.md                       # Project README for documentation
```

- Install Redux Dependencies
```sh
npm install --save redux react-redux
```

`src/components/Calc.js`
```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract } from '../state/reducers/calculatorSlice';
import "../styles.css";

function Calc() {
  const count = useSelector((state) => state.calculator.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <textarea rows="1" value={count} id="total" name="ans" readOnly />
      <button type="button" className="btn" onClick={() => dispatch(add(1))}>
        + 1
      </button>
      <button type="button" className="btn" onClick={() => dispatch(add(3))}>
        + 3
      </button>
      <button type="button" className="btn" onClick={() => dispatch(subtract(1))}>
        - 1
      </button>
    </div>
  );
}

export default Calc;
```

`src/state/store.js`
```js
import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './reducers/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer
  }
});

```

`src/state/reducers/calculatorSlice.js`
```js
import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    },
    subtract: (state, action) => {
      state.count -= action.payload;
    }
  }
});

export const { add, subtract } = calculatorSlice.actions;

export default calculatorSlice.reducer;
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
    "redux": "",
    "react-redux": ""
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
import { store } from './state/store';
import Calc from './components/Calc';

const container = document.getElementById("root");
const root = createRoot(container);

function App() {
  return <Calc />;
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
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
