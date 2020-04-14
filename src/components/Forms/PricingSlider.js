import React from "react";

import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 800000;

export default class PricingSlider extends React.Component {
    state = {
        values: [5000]
    };
    render() {
        return (
            <div >
                <div className="columns is-desktop">
                    <div className="column is-four-fifths">
                        <Range
                            values={this.state.values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={values => this.setState({ values })}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        display: "flex",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: "42px",
                                            width: "100%",
                                            borderRadius: "4px",
                                            background: getTrackBackground({
                                                values: this.state.values,
                                                colors: ["#ec008c", "#2C2F34"],
                                                min: MIN,
                                                max: MAX
                                            }),
                                            alignSelf: "center"
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props, isDragged }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: "30px",
                                        width: "30px",
                                        borderRadius: "50px",
                                        backgroundColor: "#FFF",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}
                                >

                                </div>
                            )}
                        />
                    </div>
                    <div className="column">
                        <output style={{ marginTop: "30px" }} id="output">
                            R  {this.state.values[0].toFixed(1)} <small>estimated*</small>
                        </output>
                    </div>
                </div>


            </div>
        );
    }
}
