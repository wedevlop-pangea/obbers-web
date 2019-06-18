// @flow

import React, { Component } from "react";

import cssStyles from "./styles/css/default.css";
import scssStyles from "./styles/scss/default.scss";
import inlineStyles from "./styles/inline/index.js";
import styledComponents from "./styles/styled/index.js";

const BackgroundVideo = ({
    styleOpt,
    coverColor,
    coverOpacity,
    bgImgSrc,
    mp4VideoSrc,
    webmVideoSrc,
    customStyle,
}) => {
    let styles;
    if (styleOpt === "css") styles = cssStyles;
    if (styleOpt === "scss") styles = scssStyles;
    if (styleOpt === "inline") styles = inlineStyles;
    if (styleOpt === "styled") styles = styledComponents;

    // more info
    // https://slicejack.com/fullscreen-html5-video-background-css/
    // https://www.webdesignerdepot.com/2013/10/how-to-play-video-with-html5/

    // edit div here
    // and put all editable props here inside a styles object....

    // 2 setup options...
    // pass BackgroundVideo with div styles ready to serve as background
    // or have the ability to be modified as a buton background or whatever

    // Free Video Backgrounds Website
    // https://coverr.co

    // Free mp4 video converter
    // Free mp4 to webm video converter

    const sty = {
        backgroundColor: coverColor,
        opacity: coverOpacity,
    };

    return (
        <div id="container">
            <img
                src={bgImgSrc}
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
                // poster={bgImgSrc}
                className="background-video-component-items background-video-element"
            >
                {/* type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' */}
                {/* type='video/webm;codecs="vp8, vorbis"' */}
                <source src={mp4VideoSrc} type="video/mp4" />
                <source src={webmVideoSrc} type="video/webm" />
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
    styleOpt: "css",
    coverColor: "blue",
    coverOpacity: 0.75,
    bgImgSrc: "",
    mp4VideoSrc: "",
    webmVideoSrc: "",
    customStyle: {},
};

export default BackgroundVideo;
