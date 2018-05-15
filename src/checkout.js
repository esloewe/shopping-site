import React from "react";
import axios from "./axios";

export default class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            address_1: "",
            address_2: "",
            postal_code: "",
            city: "",
            state: "",
            country: "",
            telephone: "",
            order_status: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post("/checkout", this.state).then(resp => {
            console.log("resp", resp);
        });
    }
    render() {
        return (
            <div className="checkout">
                <form className="checkout-form">
                    <div>
                        <h2 className="checkout-form-h2"> Buyer Details </h2>
                        <p>First Name: </p>
                        <input
                            onChange={this.handleChange}
                            className="medium-input"
                            name="firstname"
                            type="text"
                        />
                        <p>Last Name: </p>
                        <input
                            onChange={this.handleChange}
                            className="medium-input"
                            name="last-name"
                            type="text"
                        />
                        <p>Email: </p>
                        <input
                            onChange={this.handleChange}
                            className="medium-input"
                            name="email"
                            type="email"
                        />
                        <p>Telephone: </p>
                        <input
                            onChange={this.handleChange}
                            className="medium-input"
                            name="telephone"
                            type="text"
                        />
                    </div>

                    <div className="checkout-form checkout-form-address">
                        <p>Address Line 1: </p>
                        <input
                            onChange={this.handleChange}
                            className="longer-input"
                            name="address-1"
                            type="text"
                        />
                        <p>Address Line 2: </p>
                        <input
                            onChange={this.handleChange}
                            className="longer-input"
                            name="address-2"
                            type="text"
                        />
                        <div className="checkout-form checkout-form-address-2">
                            <div>
                                <p>Postal Code: </p>
                                <input
                                    onChange={this.handleChange}
                                    className="small-input"
                                    name="postal-code"
                                    type="text"
                                />
                                <p>City: </p>
                                <input
                                    onChange={this.handleChange}
                                    className="small-input"
                                    name="city"
                                    type="text"
                                />
                            </div>
                            <div>
                                <p>State: </p>
                                <input
                                    onChange={this.handleChange}
                                    className="small-input"
                                    name="state"
                                    type="text"
                                />
                                <p>Country: </p>
                                <input
                                    onChange={this.handleChange}
                                    className="small-input"
                                    name="country"
                                    type="text"
                                />

                                <div className="proceed-payment">
                                    <button
                                        onClick={this.handleSubmit}
                                        className="checkout-button go-to-summary"
                                    >
                                        Proceed to Summary
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
