// @flow

/**
 * Documentation
 * TextInput
 *
 * Render Label ? BOOL
 * Label Position, top, right, bottom, left
 * Label Text Align, left center right
 *
 * placeholder Text Align, left, center, right
 * placeholder Text css customize, color, font, size, etc.
 *
 */

import React, { Component, Fragment } from "react";
import { Form, Label } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const TextInput = props => {
    const {
        input,
        width,
        type,
        placeholder,
        meta: { touched, error },
        backgroundColor,
        overrideContainerStyle,
        overrideInputStyle,
        children,
    } = props;

    const containerStyle = {
        backgroundColor: backgroundColor,
        //
        // width: "200%",
        borderStyle: "none",
        // border: "20px",
        justifyContent: "center",
    };
    const inputStyle = {
        backgroundColor: backgroundColor,
        //
        color: "white",
        borderColor: "white",
        borderStyle: "solid",
        borderTop: "2px",
        borderRight: "2px",
        borderLeft: "2px",
        height: "20px !important",
        width: "250px",
    };
    const labelStyle = {
        marginTop: "3px",
        width: "100%",
        height: "25px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "100px",
        backgroundColor: "#e74c3c", // #1 red opaque
        // backgroundColor: "#F44336", // #1 red bright minimal
        // backgroundColor: "#FF5722", // #2
        // backgroundColor: "#B71C1C", // #1 red dark strong
        // backgroundColor: "#F57F17",
        // backgroundColor: "#BF360C",
        // backgroundColor: "#EF5350",
        // backgroundColor: "#FF7043",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <Form.Field
            {...props}
            style={{ ...containerStyle, ...overrideContainerStyle }}
            error={touched && !!error}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            <input
                {...input}
                style={{ ...inputStyle, ...overrideInputStyle }}
                placeholder={placeholder}
                type={type}
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                {children}
            </input>
            {touched && error && (
                <Label style={labelStyle} color="#e74c3c">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

TextInput.defaultProps = {
    placeholder: "Enter Text",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    overrideContainerStyle: {},
    overrideInputStyle: {},
};

export default TextInput;
