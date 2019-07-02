// @flow

/**
 * -----------------------------------------------------------------------------
 *
 * Documentation
 *
 * dimensions:
 * - fitParent: 100% width, 100% height.
 * - fitBrowserWindow: 100% width, 100vh height.
 * - fitChildren: width and height is set depending on children content size. Expands.
 * - pixelFixed: pass fixed Width and height values. Pixels.
 * - percentFixed: pass fixed Width and height values. Percent.
 * Defaults to width 100% and height 100%
 *
 * -----------------------------------------------------------------------------
 *
 * width x height:
 *
 * min & max width & height it can be resized to
 * Defaults to NO min and NO max
 *
 * min & max width & height it can be visible
 * Defaults to NO min and NO max
 *
 * -----------------------------------------------------------------------------
 *
 * margin: Defaults to 0.
 * padding: Defaults to 0.
 *
 * -----------------------------------------------------------------------------
 *
 * Position
 * Layout
 * Absolute?
 * Defaults to FALSE
 * Defaults to "relative"
 *
 * -----------------------------------------------------------------------------
 *
 * Content Alignment thru the X and Y axis:
 * display: "flex"
 * flexDirection
 * justifyContent
 * alignItems
 *
 * -----------------------------------------------------------------------------
 *
 * responsive
 * Defaults to TRUE
 * it resizes and fixes its size
 * if set to false, it will always keep its width and height no matter the device
 *
 * -----------------------------------------------------------------------------
 */

import React, { Component, Fragment } from "react";

import { Container } from "semantic-ui-react";

const MyContainer = props => {
    const {
        dimensions,
        children,
        overrideComponentStyle,
        backgroundColor,
    } = props;

    let style = {};

    if (dimensions === "fitParent") {
    }
    if (dimensions === "fitBrowserWindow") {
    }
    if (dimensions === "fitChildren") {
    }
    if (dimensions === "fitBrowserWindow") {
    }

    const containerStyle = {
        margin: 0,
        padding: 0,
        textAlign: "center",
        backgroundColor,
        width: "100%",
        height: "100vh",
    };

    return (
        <div
            {...props}
            style={{ ...containerStyle, ...overrideComponentStyle }}
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

MyContainer.defaultProps = {
    dimensions: "fitParent",
    overrideComponentStyle: {},
    backgroundColor: "rgba(255, 255, 255, 0)",
};

export default MyContainer;
