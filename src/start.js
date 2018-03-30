import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ProductList from "./productList";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector("main"));

export { store };
