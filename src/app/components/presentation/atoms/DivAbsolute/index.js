/**
 *
 */

import React from "react";
import cssStyles from "./styles/css.css";

const relativeStyles = {
    position: "relative",
    // backgroundColor: "black",
    opacity: 0.8,
    // margin: 0,
    // padding: 0,
    // borderRadius: 50,
    // borderSize: 10,
    // borderWidth: 10,
    // borderColor: "black",
    // backgroundColor: "yellow",
};

const absoluteStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "black",
    opacity: 0.8,
};

// style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}

const DivAbsolute = ({ contentPosition, children }) => (
    <div style={relativeStyles}>
        <div style={absoluteStyles}>{children}</div>
    </div>
);

/*
contentPosition: center, top, bottom, topLeft, topRight,
 */

/*
 const DivAbsolute = ({ contentPosition, children }) => (
     <div class="div-relative" style={relativeStyles}>
         <div class="div-absolute" style={absoluteStyles}>
             {children}
             <h1>TEST</h1>
         </div>
     </div>
 );
 */

export default DivAbsolute;
