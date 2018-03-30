import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Header from "./header";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
                <p>Testing component</p>
            </div>
        );
    }
}
