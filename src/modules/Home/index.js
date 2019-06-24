/**
 * Sections or Scenes or Pages or Screens
 * Module Content Inside This Component Div
 * Proly, create section/scene/page/screen on another page (section, screen)
 * Proly, this module could be the scene or page (scene, page) who integrates sections/screens
 */

import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

import BackgroundVideo from "../../app/components/presentation/uniques/BackgroundVideo";
import MyButton from "../../app/components/presentation/atoms/MyButton";
import DivAbsolute from "../../app/components/presentation/atoms/DivAbsolute";

import mp4VideoSrc from "./assets/video/Under-construction.mp4";
import webmVideoSrc from "./assets/video/Under-construction.webm";
import bgImgSrc from "./assets/image/Under-construction.jpg";

const homeContainerStyle = {
    // flex: 1,
    margin: 0,
    padding: 0,
    textAlign: "center",
    backgroundColor: "#ff7b4f",
    width: "100%",
    height: "100vh",
    // justifyContent: "center",
    // alignItems: "center",
    color: "white",
};

const testStyle = {
    // flex: 1,
    backgroundColor: "blue",
    // width: "100vh",
    // height: "100vh",
    // justifyContent: "center",
    // alignItems: "center",
    // color: "white",
    // width: "100%",
    // height: "100%",
    // flex: 1,
};

const titleStyle = {
    fontSize: "100px",
    margin: 0,
    padding: 0,
};
const subtitleStyle = {
    fontSize: "40px",
    margin: 0,
    padding: 0,
};

const divPageSectionStyle = {
    // margin: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    // width: "100px",
    // height: "100px",
    borderRadius: 50,
};

const HomePage = () => {
    return (
        <div className="" style={homeContainerStyle}>
            <BackgroundVideo
                mp4VideoSrc={mp4VideoSrc}
                webmVideoSrc={webmVideoSrc}
                bgImgSrc={bgImgSrc}
                coverColor="#ff7b4f"
                coverOpacity="0.85"
            >
                <div
                    style={{
                        // margin: 0,
                        // padding: 0,
                        display: "flex",
                        // textAlign: "center",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        // alignItems: "space-around",
                        // backgroundColor: "green",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={
                            {
                                // backgroundColor: "black",
                                // flex: 1,
                                // display: "flex",
                                // flex: 0.5,
                                // height: "50%",
                            }
                        }
                    >
                        <h1 style={titleStyle}>OBBERS</h1>
                        <h4 style={subtitleStyle}>Find the right job.</h4>
                    </div>

                    <div
                        style={{
                            // backgroundColor: "gray",
                            // flex: 1,
                            // display: "flex",
                            // flex: 0.5,
                            // height: "50%",
                            marginBottom: 200,

                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <MyButton text="HIRE ME" />
                        <MyButton text="HIRE" />
                    </div>
                </div>
            </BackgroundVideo>
            <div className="homeChildDiv" style={divPageSectionStyle}>
                <DivAbsolute>
                    <h1 style={titleStyle}>OBBERS</h1>
                    <MyButton text="HIRE" />
                </DivAbsolute>
            </div>
            <div className="homeChildDiv" style={divPageSectionStyle} />
            <div className="homeChildDiv" style={divPageSectionStyle} />
        </div>
    );
};

/*
<BackgroundVideo
    mp4VideoSrc={mp4VideoSrc}
    webmVideoSrc={webmVideoSrc}
    bgImgSrc={bgImgSrc}
    coverColor="#ff7b4f"
>
    <h1>OBBERS</h1>
    <h4>Find the right job.</h4>
    <MyButton text="HIRE ME" />
    <MyButton text="HIRE" />
</BackgroundVideo>
*/

export default HomePage;
