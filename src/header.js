import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkout } from "./actions";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

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
                        <Link to="/shopping-cart" className="menu-icon icons">
                            <i
                                className="material-icons shopping-cart md-36"
                                onClick={this.handleClick}
                            >
                                add_shopping_cart
                            </i>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state checkout get header", state.getCheckout);
    return {
        getCheckout: state.getCheckout
    };
}
export default connect(mapStateToProps)(Header);
