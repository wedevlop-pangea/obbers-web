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
        title,
        input,
        width,
        type,
        placeholder,
        meta: { touched, error, valid },
        backgroundColor,
        addContainerStyle,
        addInputStyle,
        children,
    } = props;

    let fieldTitle = props.title ? props.title : "VALID";

    const containerStyle = {
        backgroundColor: backgroundColor,
        // backgroundColor: "red",
        //
        // width: "200%",
        borderStyle: "none",
        // border: "20px",
        justifyContent: "center",
    };

    const inputStyle = {
        backgroundColor: backgroundColor,
        //
        color: "#3A4040",
        placeholderTextColor: "red",
        borderColor: "rgba(255, 255, 255, 0.750)",
        // borderTopColor: "rgba(255, 255, 255, 0.0)",
        // borderRightColor: "rgba(255, 255, 255, 0.0)",
        // borderBottomColor: "rgba(255, 255, 255, 0.0)",
        // borderLeftColor: "rgba(255, 255, 255, 0.0)",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "0px",
        // borderTopRadius
        // borderTopLeftRadius
        borderTop: "0px",
        borderRight: "0px",
        borderLeft: "0px",
        height: "20px !important",
        width: "250px",
        fontSize: "20px",
        fontWeight: "bold",
    };

    const labelErrorStyle = {
        marginTop: "3px",
        width: "100%",
        height: "25px",
        // borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        // borderTopLeftRadius: "50px",
        // borderTopRightRadius: "50px",
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
        fontSize: "12px",
    };

    const labelSuccessStyle = {
        marginTop: "3px",
        width: "100%",
        height: "25px",
        // borderBottomLeftRadius: "50px",
        // borderBottomRightRadius: "50px",
        // borderTopLeftRadius: "50px",

        // borderTopRightRadius: "50px",
        backgroundColor: "rgba(255, 255, 255, 0.0)",

        // backgroundColor: "#F44336", // #1 red bright minimal
        // backgroundColor: "#FF5722", // #2
        // backgroundColor: "#B71C1C", // #1 red dark strong
        // backgroundColor: "#F57F17",
        // backgroundColor: "#BF360C",
        // backgroundColor: "#EF5350",
        // backgroundColor: "#FF7043",

        // color: "white",
        color: "gray",
        fontWeight: "bold",
        fontSize: "12px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    };

    return (
        <Form.Field
            {...props}
            style={{ ...containerStyle, ...addContainerStyle }}
            error={touched && !!error}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {valid && (
                // <Label style={labelSuccessStyle} color="green">
                <Label style={labelSuccessStyle}>{fieldTitle}</Label>
            )}
            <input
                {...input}
                style={{ ...inputStyle, ...addInputStyle }}
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
                <Label style={labelErrorStyle} color="#e74c3c">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

TextInput.defaultProps = {
    // title: "Valid",
    placeholder: "Enter Text",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    addContainerStyle: {},
    addInputStyle: {},
};

export default TextInput;
