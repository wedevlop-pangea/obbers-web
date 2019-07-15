// @flow

/**
 * Semantic UI Icons
 *
 * Icon Names
 * https://semantic-ui.com/elements/icon.html
 *
 * Icon Examples and Props
 * https://react.semantic-ui.com/elements/icon/
 */

import React from "react";
import { Icon, Label } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyIcon = props => {
    const {
        name,
        size,
        color,
        backgroundColor,
        overrideStyle,
        children,
    } = props;

    const iconStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <Icon
            {...props}
            style={{ ...iconStyle, ...overrideStyle }}
            name={name}
            size={size}
            color={color}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {children}
        </Icon>
    );
};

MyIcon.defaultProps = {
    name: "star outline",
    size: "mini", // mini, tiny, small, large, big, huge, massive
    color: "rgba(255, 255, 255, 0.0)", // red orange yellow olive green teal blue violet purple pink brown grey black
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    overrideStyle: {},
};

export default MyIcon;
