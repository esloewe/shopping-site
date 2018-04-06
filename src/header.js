import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(e) {
        console.log("clickin");
        e.preventDefault;
    }

    h;
    render() {
        return (
            <div className="menu-container">
                <Link className="menu-list" to="/">
                    <h1 id="title-header">byLayer</h1>
                </Link>

                <ul className="menu-list">
                    <Link className="menu-list product-header" to="/products">
                        Products
                    </Link>
                </ul>
                <div className="menu-icons">
                    <ul className="menu-icons ">
                        <Link
                            to="/"
                            onClick={this.handleSubmit}
                            className="menu-icon register"
                        >
                            Register
                        </Link>

                        <li className="menu-icon icons">
                            <i className="material-icons md-36">
                                person_outline
                            </i>
                        </li>

                        <Link to="/shopping-cart" className="menu-icon icons">
                            <i className="material-icons shopping-cart md-36">
                                add_shopping_cart
                            </i>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}
