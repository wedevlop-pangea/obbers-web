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
        width: "80%",
        height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        // fontFamily
        // fontSize: 20,
        // color: "white",
    };

    const buttonStyle = {
        width: "80%",
        height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        backgroundColor: "rgba(255, 255, 255, 0.20)",
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
                className={[cssModules.myButtonLink]}
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
