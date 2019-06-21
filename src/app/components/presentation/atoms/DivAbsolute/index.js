/**
 *
 */

import React from "react";
import cssStyles from "./styles/css.css";

const relativeStyles = {
    margin: 0,
    padding: 0,
    borderRadius: 50,
    // borderSize: 10,
    // borderWidth: 10,
    // borderColor: "black",
    backgroundColor: "yellow",
};

const absoluteStyles = {
    // borderRadius: 50,
    // borderSize: 10,
    // borderWidth: 10,
    // borderColor: "black",
    // backgroundColor: "white",
};

// style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}

const DivAbsolute = ({ contentPosition, children }) => (
    <div class="div-relative" style={relativeStyles} />
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
