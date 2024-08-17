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