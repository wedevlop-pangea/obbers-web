// @flow

/**
 * Documentation
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import cssModules from "./styles/cssModules.css";

const MyButtonLink = props => {
    const {
        text,
        pathname,
        search,
        hash,
        state,
        overrideLinkStyle,
        overrideButtonStyle,
    } = props;

    const linkStyle = {
        width: "400px",
        height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        // fontFamily
        // fontSize: 20,
        // color: "white",
        backgroundColor: "rgba(255, 255, 205, 0.20)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    const buttonStyle = {
        width: "100%",
        height: "100%",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        // fontFamily
        fontSize: 20,
        color: "white",
    };

    return (
        <Link
            style={{ ...linkStyle, ...overrideLinkStyle }}
            to={{
                pathname: pathname,
                search: search, // search: "?sort=name",
                hash: hash, // hash: "#the-hash",
                state: state, // state: { fromDashboard: true },
            }}
        >
            <Button
                {...props}
                style={{ ...buttonStyle, ...overrideButtonStyle }}
                content={text}
                // as={Link}
                // to={pathname}
            />
        </Link>
    );
};

MyButtonLink.defaultProps = {
    text: "MyButtonLink",
    pathname: "/",
    search: "",
    hash: "#",
    state: "",
    overrideLinkStyles: {},
    overrideButtonStyle: {},
};

export default MyButtonLink;
