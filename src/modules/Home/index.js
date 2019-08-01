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
    MyImage,
    MyBackgroundVideo,
    CompanyLogo,
    CompanyAppIcon,
    OSIcon,
    MyModal,
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
    // fontSize: "40px",
    margin: 0,
    padding: 0,
};
const thirdTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
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
            <MyContainer justifyContent="space-around" minHeight="550px">
                <MyBackgroundVideo
                    mp4VideoSrc={mp4VideoSrc}
                    webmVideoSrc={webmVideoSrc}
                    bgImgSrc={bgImgSrc}
                    coverColor="#ff7b4f"
                    coverOpacity="0.9"
                >
                    <MyContainer position="absolute">
                        <MyContainer>
                            <CompanyLogo
                                theme="white"
                                size="large"
                                backgroundColor="rgba(255, 255, 255, 0.0)"
                            />
                            <h1 style={subtitleStyle}>Find the right job.</h1>
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
                                <a href="/signin" style={thirdTextStyle}>
                                    <strong>
                                        Have an account?
                                        <br />
                                        <u>Sign in</u>
                                    </strong>
                                </a>
                            </MyContainer>
                        </MyContainer>
                    </MyContainer>
                </MyBackgroundVideo>
            </MyContainer>
            <MyContainer
                size="fitScreen"
                backgroundColor="white"
                minHeight="550px"
                justifyContent="space-evenly"
            >
                <MyContainer justifyContent="flex-end">
                    <CompanyAppIcon size="small" />
                    <CompanyLogo
                        theme="light"
                        size="medium"
                        backgroundColor="rgba(255, 255, 255, 0.0)"
                    />
                </MyContainer>
                <MyContainer justifyContent="space-around">
                    <MyContainer>
                        <h1 style={{ fontSize: "20px", color: "#ff7b4f" }}>
                            With our mobile app you will be able
                            <br />
                            to keep the right people in your pocket
                            <br />
                            or find the right job from the palm of your hand.
                        </h1>
                    </MyContainer>
                    <MyContainer>
                        <MyContainer size="" flexDirection="row">
                            <OSIcon name="apple" size="mini" />
                            <div style={{ width: "20px" }} />
                            <OSIcon name="android" size="mini" />
                        </MyContainer>
                        <h2 style={{ color: "#252525" }}>
                            Coming soon to iOS and Android
                        </h2>
                    </MyContainer>
                </MyContainer>
            </MyContainer>

            <MyContainer size="fitContentFullWidth" backgroundColor="#2f3542">
                <br />
                <br />
                <CompanyLogo
                    theme="dark"
                    size="small"
                    backgroundColor="rgba(255, 255, 255, 0.0)"
                />
                <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Obbers © 2019 <br /> All Rights Reserved.
                </h4>
                <br />
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
