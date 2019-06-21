/**
 * Styles can be override
 * Receives props, but has default props
 * Can render child components
 */

import React from "react";
import { Button } from "semantic-ui-react";
import cssStyles from "./styles/css.css";

const styles = {
    borderRadius: 0,
    borderSize: 10,
    borderWidth: 10,
    borderColor: "black",
    // backgroundColor: "white",
};

const MyButton = ({ text }) => (
    <Button style={styles} className="myButton" content="Click Here">
        {text}
    </Button>
);

export default MyButton;
