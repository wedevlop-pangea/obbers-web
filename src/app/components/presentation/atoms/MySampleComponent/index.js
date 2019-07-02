// @flow

/**
 * Documentation
 *
 * Default Props
 * Has default props, so it works if no props are passed.
 *
 * Dimensions
 * Fixed width and height, but can be set to 100% width and height to fit its parent.
 *
 * Children
 * It accepts and renders children, if passed.
 *
 * Props Destructure
 * Right inside the function is the very first thing we do.
 *
 * Props for Styling
 * We add the styles object inside the function, in case we need to make use
 * props as style values.
 *
 * Override Styles
 * Component can accept a styles object and override the ones it has by default.
 *
 * Component Receives Parent Attrbutes {...props}
 * Parent can pass html or component attributes and this functional component
 * will apply those to itself.
 *
 * Can Talk to Parent
 * Component can talk to its parent.
 *
 * Parent Can Talk to Children
 * Component who renders this component can also talk to this functional component.
 *
 * Controlled Component
 * Some of its values can be controlled by state or other similar approaches.
 *
 * Multiple Styling Options Ready
 * It has folder structure ready to accept different ways of styling, such as
 * css, css3, css modules, sass, scss, inline, style objects and styled components.
 *
 * Multiple CSS Modules Ready
 * You can easily pass multiple css modules (local css classes).
 */

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Container, Grid } from "semantic-ui-react";

import cssModules from "./styles/css_modules.css";

const MySampleFunctionalComponent = props => {
    const { children, overrideComponentStyle, backgroundColor } = props;

    const buttonStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <Container
            {...props}
            style={{ ...buttonStyle, ...overrideComponentStyle }}
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
        </Container>
    );
};

MySampleFunctionalComponent.defaultProps = {
    overrideComponentStyle: {},
    backgroundColor: "rgba(255, 255, 255, 0.50)",
};

export default MySampleFunctionalComponent;
