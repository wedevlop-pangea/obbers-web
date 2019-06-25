/**
 * Documentation
 */

import React from "react";
import { Button } from "semantic-ui-react";
import cssModules from "./styles/cssModules.css";

const MyButton = props => {
    const { text, overrideButtonStyle } = props;

    const buttonStyle = {
        width: "80%",
        height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        // backgroundColor: rgba(255, 255, 255, 0),
        // fontFamily
        fontSize: 20,
        color: "white",
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
    color: "white",
    overrideButtonStyle: {},
};

export default MyButton;
