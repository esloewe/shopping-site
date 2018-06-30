import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./header";
import ProductList from "./productList";
import ProductModal from "./productModal";
import Graphic from "./graphic";
import ShoppingCart from "./shoppingCart";
import CommingSoon from "./comingSoon";
import AdminPanel from "./admin/adminPanel";
import AdminProductUpload from "./admin/adminProductUpload";
import AdminCatalogue from "./admin/adminCatalogue";
import Checkout from "./checkout";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Graphic} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/product" component={ProductModal} />
                        <Route path="/shopping-cart" component={ShoppingCart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/purchase" component={CommingSoon} />
                        <Route path="/admin" component={AdminPanel} />
                        <Route
                            path="/admin-product-upload"
                            component={AdminProductUpload}
                        />
                        <Route
                            path="/admin-catalogue"
                            component={AdminCatalogue}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
