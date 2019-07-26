// @flow

/**
 * Documentation
 * This button should be totally configurable, select shape, borders, type, size, fontSize, etc
 */

import React from "react";
import { Link } from "react-router-dom";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyLink = props => {
    const {
        text,
        fontSize,
        fontName,
        fontColor,
        //
        bold,
        italic,
        line,
        //,
        pathname,
        search,
        hash,
        state,
        //,
        backgroundColor,
        addStyle,
        //
        children,
    } = props;

    let linkStyle = {
        fontSize,
        fontName,
        color: fontColor,
        backgroundColor,
        // width: "400px",
        // height: "80px",
        // borderRadius: 10,
        // borderSize: 10,
        // borderWidth: 10,
        // borderColor: "black",
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        // fontFamily
        // fontSize: 20,
        // color: "white",
        // backgroundColor: "rgba(255, 255, 205, 0.20)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
    };

    if (bold) {
        let addStyle = { fontWeight: "bold" };
        linkStyle = { ...linkStyle, ...addStyle };
    }
    if (italic) {
        let addStyle = { fontStyle: "italic" };
        linkStyle = { ...linkStyle, ...addStyle };
    }
    if (line && line === "underline") {
        let addStyle = { textDecoration: "underline" };
        linkStyle = { ...linkStyle, ...addStyle };
    }
    if (line && line === "overline") {
        let addStyle = { textDecoration: "overline" };
        linkStyle = { ...linkStyle, ...addStyle };
    }
    if (line && line === "line-through") {
        let addStyle = { textDecoration: "line-through" };
        linkStyle = { ...linkStyle, ...addStyle };
    }

    return (
        <Link
            {...props}
            style={{ ...linkStyle, ...addStyle }}
            to={{
                pathname: pathname,
                search: search, // search: "?sort=name",
                hash: hash, // hash: "#the-hash",
                state: state, // state: { fromDashboard: true },
            }}
        >
            {children}
        </Link>
    );
};

MyLink.defaultProps = {
    text: "MyLink",
    fontSize: 20,
    fontName: "",
    fontColor: "rgba(255, 255, 255, 1)",
    //
    bold: false,
    italic: false,
    line: false,
    //
    pathname: "/",
    search: "", // search: "?sort=name",
    hash: "#", // hash: "#the-hash",
    state: "", // state: { fromDashboard: true },
    //
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    addStyle: {},
};

export default MyLink;
