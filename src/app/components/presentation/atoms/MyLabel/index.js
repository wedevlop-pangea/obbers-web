// @flow

/**
 * Documentation
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
