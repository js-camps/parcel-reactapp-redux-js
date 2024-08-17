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