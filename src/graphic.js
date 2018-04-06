import React from "react";

export default class Graphic extends React.Component {
    componentDidMount() {
        happyfun();
    }

    render() {
        return (
            <div className="graphic">
                <div id="three-js-item" />
                <div className="text-in-graphic">
                    A collection of{" "}
                    <span id="highlighted-text">
                        <b>3d-printed jewelry</b>
                    </span>{" "}
                    made in Berlin.
                </div>
                {/*<img src="/abstract-shapes.svg" />*/}
            </div>
        );
    }
}
