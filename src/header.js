import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className="menu-container">
                <ul className="menu-list">
                    <h1>Shop Name</h1>
                    <li className="menu-item"> jewelry </li>
                    <li className="menu-item"> fashion </li>
                    <li className="menu-item"> products </li>
                </ul>
                <div className="menu-icons">
                    <ul className="menu-icons">
                        <li className="menu-icon"> </li>
                        <li className="menu-icon"> </li>
                        <li className="menu-icon"> </li>
                    </ul>
                </div>
            </div>
        );
    }
}
