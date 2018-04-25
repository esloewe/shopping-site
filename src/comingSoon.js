import React from "react";

export default class CommingSoon extends React.Component {
    render() {
        return (
            <div className="coming-soon-container">
                <div className="coming-soon">Coming Soon ... </div>{" "}
                <div id="button-paypal">
                    <button>payment</button>
                </div>
            </div>
        );
    }
}
