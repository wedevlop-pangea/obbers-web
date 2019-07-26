// @flow

/**
 * Documentation
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyButton = props => {
    const {
        //, content
        text,
        //, Link prop attr
        asLink,
        pathname,
        search,
        hash,
        state,
        //, layout
        display,
        flexDirection,
        justifyContent,
        alignItems,
        //, button style
        width,
        height,
        //
        bgImgUrl,
        bgImgSize,
        bgImagePos,
        bgRepeat,
        //, link style

        //, style objects
        addLinkStyle,
        addButtonStyle,
        children,
        // shape, // "rectangle" round corner, "square" round corner, "circle", "polygon" number of polygons, "parallelogram" direction left or right and round corner
    } = props;

    // should fit content, button is the content, layout button and children
    let linkStyle = {
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
        display: display,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
    };

    let buttonStyle = {
        width,
        height,
        borderRadius: 50,
        // borderSize: 10,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 1.0)",
        backgroundColor: "rgba(0, 200, 255, 0.0)",
        // backgroundColor: "red",
        // fontFamily
        fontSize: 20,
        color: "white",
    };

    if (bgImgUrl !== false) {
        let addStyle = {
            backgroundImage: bgImgUrl,
            backgroundSize: bgImgSize,
            backgroundPosition: bgImagePos,
            backgroundRepeat: bgRepeat,
        };
        linkStyle = { ...buttonStyle, ...addStyle };
    }

    if (asLink) {
        return (
            <Link
                style={{ ...linkStyle, ...addLinkStyle }}
                to={{
                    pathname: pathname,
                    search: search, // search: "?sort=name",
                    hash: hash, // hash: "#the-hash",
                    state: state, // state: { fromDashboard: true },
                }}
            >
                <Button
                    {...props}
                    style={{ ...buttonStyle, ...addButtonStyle }}
                    content={text}
                    // as={Link}
                    // to={pathname}
                >
                    {children}
                </Button>
            </Link>
        );
    }

    return (
        <Button
            {...props}
            style={{ ...buttonStyle, ...addButtonStyle }}
            content={text}
            // as={Link}
            // to={pathname}
        >
            {children}
        </Button>
    );
};

MyButton.defaultProps = {
    // content
    text: "MyButton",
    //
    asLink: false,
    pathname: "/",
    search: "", // search: "?sort=name",
    hash: "#", // hash: "#the-hash",
    state: "", // state: { fromDashboard: true },
    //
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //, button style
    width: "300px",
    height: "80px",
    //
    bgImgUrl: false,
    bgImgSize: "cover",
    bgImagePos: "center",
    bgRepeat: "no-repeat",
    //
    addLinkStyles: {},
    addButtonStyle: {},
};

export default MyButton;
