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
                        <b>
                            3D<span id="highlighted-text-2">-</span>printed
                            jewelry
                        </b>
                    </span>{" "}
                    made by in Berlin.
                </div>
                {/*<img src="/abstract-shapes.svg" />*/}
            </div>
        );
    }
}
