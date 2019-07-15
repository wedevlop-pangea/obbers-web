// @flow

/**
 * Sections or Scenes or Pages or Screens
 * Module Content Inside This Component Div
 * Proly, create section/scene/page/screen on another page (section, screen)
 * Proly, this module could be the scene or page (scene, page) who integrates sections/screens
 */

import React from "react";

import {
    MyContainer,
    MyGrid,
    MyRow,
    MyColumn,
    MyLink,
    MyButton,
    MyBackgroundVideo,
} from "./components";

import mp4VideoSrc from "./assets/video/Under-construction.mp4";
import webmVideoSrc from "./assets/video/Under-construction.webm";
import bgImgSrc from "./assets/image/Under-construction.jpg";

const titleStyle = {
    fontSize: "80px",
    margin: 0,
    padding: 0,
};
const subtitleStyle = {
    fontSize: "40px",
    margin: 0,
    padding: 0,
};
const thirdTextStyle = {
    fontSize: "15px",
    color: "white",
};
const rightsReservedStyle = {
    // fontSize: "15px",
    margin: 0,
    padding: 0,
};

const HomePage = () => {
    return (
        <MyContainer size="mainContainer">
            <MyContainer justifyContent="space-around" minHeight="500px">
                <MyBackgroundVideo
                    mp4VideoSrc={mp4VideoSrc}
                    webmVideoSrc={webmVideoSrc}
                    bgImgSrc={bgImgSrc}
                    coverColor="#ff7b4f"
                    coverOpacity="0.9"
                >
                    <MyContainer position="absolute">
                        <MyContainer>
                            <h1 style={titleStyle}>OBBERS</h1>
                            <h4 style={subtitleStyle}>Find the right job.</h4>
                        </MyContainer>

                        <MyContainer justifyContent="space-evenly">
                            <MyGrid>
                                <MyRow>
                                    <MyColumn columnWidth={8}>
                                        <MyButton
                                            asLink
                                            pathname="/employer/signup"
                                            text="HIRE"
                                        />
                                    </MyColumn>
                                    <MyColumn columnWidth={8}>
                                        <MyButton
                                            asLink
                                            pathname="/employee/signup"
                                            text="HIRE ME"
                                        />
                                    </MyColumn>
                                </MyRow>
                            </MyGrid>
                            <MyContainer size="fitContent">
                                <a href="" style={thirdTextStyle}>
                                    <strong>
                                        Have an account? <u>Sign in</u>
                                    </strong>
                                </a>
                                <a href="" style={thirdTextStyle}>
                                    <strong>Forgot my password</strong>
                                </a>
                            </MyContainer>
                        </MyContainer>
                    </MyContainer>
                </MyBackgroundVideo>
            </MyContainer>
            <MyContainer size="fitScreen" backgroundColor="gray">
                <h1 style={rightsReservedStyle}>OBBERS © 2019</h1>
            </MyContainer>
            <MyContainer size="fitContent" backgroundColor="black">
                <br />
                <h4 style={rightsReservedStyle}>OBBERS © 2019</h4>
                <h4 style={rightsReservedStyle}>All Rights Reserved.</h4>
                <br />
            </MyContainer>
        </MyContainer>
    );
};

/*
<MyLink bold>{"Have an account?"}</MyLink>
<MyLink italic>Sign In</MyLink>
*/

export default HomePage;
