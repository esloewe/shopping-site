import React from "react";
import { Link } from "react-router-dom";

export default class AdminPanel extends React.Component {
    render() {
        return (
            <div className="admin-container">
                <h1>Admin Panel</h1>
                <div className="admin-links-container">
                    <Link className="admin-links" to="/admin-catalogue">
                        {" "}
                        Catalogue
                    </Link>
                    <Link className="admin-links" to="/admin-product-upload">
                        {" "}
                        Product Upload{" "}
                    </Link>
                </div>
            </div>
        );
    }
}
