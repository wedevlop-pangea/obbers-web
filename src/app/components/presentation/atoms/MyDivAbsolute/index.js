// @flow

/**
 * Documentation
 */

import React from "react";

const MyDivAbsolute = props => {
    const { contentPosition, children } = props;

    const relativeDivStyle = {
        position: "relative",
    };

    const absoluteDivStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <div style={relativeDivStyle}>
            <div style={absoluteDivStyle}>{children}</div>
        </div>
    );
};

MyDivAbsolute.defaultProps = {};

export default MyDivAbsolute;
