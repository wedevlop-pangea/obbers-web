// @flow

/**
 * Documentation
 * TextArea
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

const TextArea = props => {
    const {
        input,
        rows,
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
        width: "100%",
        borderStyle: "none",
        border: "20px",
    };
    const inputStyle = {
        backgroundColor: backgroundColor,
        //
        borderStyle: "solid",
        borderTop: "2px",
        borderRight: "2px",
        borderLeft: "2px",
        height: "20px !important",
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
            <textarea
                {...input}
                style={{ ...inputStyle, ...overrideInputStyle }}
                placeholder={placeholder}
                type={type}
                rows={rows}
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                {children}
            </textarea>
            {touched && error && (
                <Label basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

TextArea.defaultProps = {
    placeholder: "Enter Text",
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    overrideContainerStyle: {},
    overrideInputStyle: {},
};

export default TextArea;
