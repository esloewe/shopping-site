import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-container">
                <Link className="menu-list" to="/">
                    <h1 id="title-header">Shop Name</h1>
                </Link>

                <ul className="menu-list">
                    <Link className="menu-list" to="/products">
                        Products
                    </Link>
                </ul>
                <div className="menu-icons">
                    <ul className="menu-icons">
                        <li className="menu-icon">Register</li>
                        <li className="menu-icon">
                            <i className="material-icons md-36">
                                person_outline
                            </i>
                        </li>
                        <li className="menu-icon">
                            <i className="material-icons md-36">
                                add_shopping_cart
                            </i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
