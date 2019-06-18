import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

import BackgroundVideo from "./components/presentation/unique/BackgroundVideo";

import mp4VideoSrc from "./assets/video/Under-construction.mp4";
import webmVideoSrc from "./assets/video/Under-construction.webm";
import bgImgSrc from "./assets/image/Under-construction.jpg";

const homestyle = {
    // flex: 1,
    backgroundColor: "#ff7b4f",
    // width: "500px",
    // height: "100px",
    // justifyContent: "center",
    // alignItems: "center",
    color: "white",
};

const textStyle = {
    // flex: 1,
    // backgroundColor: "#ff7b4f",
    // width: "500px",
    // height: "100px",
    // justifyContent: "center",
    // alignItems: "center",
    color: "white",
    position: "absolute",
};

const HomePage = () => {
    return (
        <div className="" style={homestyle}>
            <BackgroundVideo
                mp4VideoSrc={mp4VideoSrc}
                webmVideoSrc={webmVideoSrc}
                bgImgSrc={bgImgSrc}
                coverColor="#ff7b4f"
            />
            <div className="" style={textStyle}>
                <h1>OBBERS</h1>
            </div>
        </div>
    );
};

export default HomePage;
