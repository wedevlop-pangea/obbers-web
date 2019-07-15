// @flow

/**
 * Documentation
 * MyInput
 *
 */

import React, { Component, Fragment } from "react";
import { Input } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyInput = props => {
    const { placeholder, backgroundColor, overrideStyle, children } = props;

    const inputStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <Input
            {...props}
            style={{ ...inputStyle, ...overrideStyle }}
            placeholder={placeholder}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {children}
        </Input>
    );
};

MyInput.defaultProps = {
    placeholder: "Enter Text",
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    overrideStyle: {},
};

export default MyInput;
