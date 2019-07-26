// @flow

/**
 * Documentation
 * MyImage
 */

// import React, { Component, Fragment } from "react";
// import { Image } from "semantic-ui-react";
//
// import cssStyles from "./styles/css/default.css";
// import cssModules from "./styles/css_modules/default.css";
// import sassStyles from "./styles/sass/default.sass";
// import scssStyles from "./styles/scss/default.scss";
// import stylable from "./styles/stylable/default.st.css";
// import styleObjects from "./styles/style_objects/index.js";
// import styledComponents from "./styles/styled_components/index.js";
//
// const MyImage = props => {
//     const { src, size, backgroundColor, addStyle, children } = props;
//
//     const imageStyle = {
//         backgroundColor: backgroundColor,
//     };
//
//     return (
//         <Image
//             {...props}
//             style={{ ...imageStyle, ...addStyle }}
//             src={src}
//             size={size}
//             // className={[cssModules.container]}
//             // CSS Modules, join 2 classes
//             // className={[cssModules.classA, cssModules.classB].join(" ")}
//             //
//             // className="container"
//             // Vanilla CSS, join 2 classes
//             // className="container classA classB"
//         >
//             {children}
//         </Image>
//     );
// };
//
// MyImage.defaultProps = {
//     src: "",
//     size: "medium", // mini tiny small medium large big huge massive - from semantic ui react
//     backgroundColor: "rgba(255, 255, 255, 1.0)",
//     addStyle: {},
// };
//
// export default MyImage;
//
// -----------------------------------------------------------------------------
//
import React, { Component, Fragment } from "react";
import { Image } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MyImage = props => {
    const { src, size, backgroundColor, addStyle, children } = props;

    const imageStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <Image
            {...props}
            style={{ ...imageStyle, ...addStyle }}
            src={src}
            size={size}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            {children}
        </Image>
    );
};

MyImage.defaultProps = {
    src: "",
    size: "medium", // mini tiny small medium large big huge massive - from semantic ui react
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    addStyle: {},
};

export default MyImage;
