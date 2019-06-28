// @flow

/**
 * Documentation
 * This button should be totally configurable, select shape, borders, type, size, fontSize, etc
 */

import React from "react";
import { Button } from "semantic-ui-react";
import cssModules from "./styles/cssModules.css";

const MyButton = props => {
    const {
        text,
        buttonColor,
        textColor,
        overrideButtonStyle,
        shape, // "rectangle" round corner, "square" round corner, "circle", "polygon" number of polygons, "parallelogram" direction left or right and round corner
    } = props;

    const buttonStyle = {
        width: "80%",
        height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        backgroundColor: buttonColor,
        // fontFamily
        fontSize: 20,
        color: textColor,
    };

    return (
        <Button
            {...props}
            style={{ ...buttonStyle, ...overrideButtonStyle }}
            className={[cssModules.myButton]}
            content={text}
        />
    );
};

MyButton.defaultProps = {
    text: "MyButton",
    buttonWidth: "80%",
    buttonHeight: "80px",
    fontSize: 20,
    buttonColor: "rgba(255, 255, 255, 0.2)",
    color: "rgba(255, 255, 255, 1)",
    overrideButtonStyle: {},
};

export default MyButton;
