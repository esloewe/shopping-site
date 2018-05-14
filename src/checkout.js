import React from "react";

export default class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="checkout">
                <form className="checkout-form">
                    <h2 className="checkout-form-h2"> Buyer Details </h2>
                    <p>First Name: </p>
                    <input
                        className="medium-input"
                        name="firstname"
                        type="text"
                    />
                    <p>Last Name: </p>
                    <input
                        className="medium-input"
                        name="last-name"
                        type="text"
                    />
                    <p>Email: </p>
                    <input className="medium-input" name="email" type="email" />
                    <p>Telephone: </p>
                    <input
                        className="medium-input"
                        name="telephone"
                        type="text"
                    />
                </form>
                <form className="checkout-form checkout-form-address">
                    <p>Address Line 1: </p>
                    <input
                        className="longer-input"
                        name="address-1"
                        type="text"
                    />
                    <p>Address Line 2: </p>
                    <input
                        className="longer-input"
                        name="address-2"
                        type="text"
                    />
                    <form className="checkout-form checkout-form-address-2">
                        <div>
                            <p>Postal Code: </p>
                            <input
                                className="small-input"
                                name="postal-code"
                                type="text"
                            />
                            <p>City: </p>
                            <input
                                className="small-input"
                                name="city"
                                type="text"
                            />
                        </div>
                        <div>
                            <p>State: </p>
                            <input
                                className="small-input"
                                name="state"
                                type="text"
                            />
                            <p>Country: </p>
                            <input
                                className="small-input"
                                name="country"
                                type="text"
                            />

                            <div className="proceed-payment">
                                <button className="checkout-button go-to-summary">
                                    Proceed to Summary
                                </button>
                            </div>
                        </div>
                    </form>
                </form>
            </div>
        );
    }
}
