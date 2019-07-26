import React, { Component, Fragment } from "react";
import { Label } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyLabel = props => {
    const { children, addStyle, backgroundColor } = props;

    const labelStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <Label
            {...props}
            style={{ ...labelStyle, ...addStyle }}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {children}
        </Label>
    );
};

MyLabel.defaultProps = {
    addStyle: {},
    backgroundColor: "rgba(255, 255, 255, 0.50)",
};

export default MyLabel;
