// @flow

import React, { Component, Fragment } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyText = props => {
    const { responsive, color, addStyle, children } = props;

    const textStyle = {
        color: color,
    };

    return (
        <div
            {...props}
            style={{ ...textStyle, ...addStyle }}
            //
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {children}
        </div>
    );
};

MyText.defaultProps = {
    responsive: true,
    color: "rgba(255, 255, 255, 1.0)",
    addStyle: {},
};

export default MyText;
