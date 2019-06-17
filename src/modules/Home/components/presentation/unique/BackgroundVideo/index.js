import React, { Component } from "react";

import cssStyles from "./styles/css/default.css";
import scssStyles from "./styles/scss/default.scss";
import inlineStyles from "./styles/inline/index.js";
import styledComponents from "./styles/styled/index.js";

const BackgroundVideo = props => {
    let styles;
    const stylingOption = props.stylingOption;
    if (stylingOption === "css") styles = cssStyles;
    if (stylingOption === "scss") styles = scssStyles;
    if (stylingOption === "inline") styles = inlineStyles;
    if (stylingOption === "styled") styles = styledComponents;

    // more info
    // https://slicejack.com/fullscreen-html5-video-background-css/
    // https://www.webdesignerdepot.com/2013/10/how-to-play-video-with-html5/

    // edit div here
    // and put all editable props here inside a styles object....

    // 2 setup options...
    // pass BackgroundVideo with div styles ready to serve as background
    // or have the ability to be modified as a buton background or whatever

    const sty = {
        backgroundColor: props.coverColor,
    };

    return (
        <div id="container">
            <img
                src={props.bgImg}
                className="background-video-component-items background-video-element"
            />
            <video
                // controls
                width="100%"
                height="100%"
                preload="true"
                autoPlay
                loop
                muted
                // poster={props.bgImg}
                className="background-video-component-items background-video-element"
            >
                {/* type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' */}
                {/* type='video/webm;codecs="vp8, vorbis"' */}
                <source src={props.mp4Video} type="video/mp4" />
                <source src={props.webmVideo} type="video/webm" />
                {/*Your browser does not support the video tag.*/}
            </video>
            <div
                className="background-video-component-items background-video-color-cover"
                style={sty}
            />
        </div>
    );
};

BackgroundVideo.defaultProps = {
    stylingOption: "css",
    customStyle: {},
    coverColor: "blue",
};

export default BackgroundVideo;
