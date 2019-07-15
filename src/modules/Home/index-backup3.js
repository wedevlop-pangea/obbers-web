// @flow

/**
 * Sections or Scenes or Pages or Screens
 * Module Content Inside This Component Div
 * Proly, create section/scene/page/screen on another page (section, screen)
 * Proly, this module could be the scene or page (scene, page) who integrates sections/screens
 */

import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Button, Image, Segment } from "semantic-ui-react";

import {
    MyContainer,
    MyGrid,
    MyRow,
    MyColumn,
    MyButtonLink,
    MyBackgroundVideo,
} from "./components";

import MyDivAbsolute from "../../app/components/presentation/atoms/MyDivAbsolute";
// import MyDivContainer from "../../app/components/presentation/atoms/MyDivContainer";

import mp4VideoSrc from "./assets/video/Under-construction.mp4";
import webmVideoSrc from "./assets/video/Under-construction.webm";
import bgImgSrc from "./assets/image/Under-construction.jpg";

const homeContainerStyle = {
    // flex: 1,
    margin: 0,
    padding: 0,
    textAlign: "center",
    // backgroundColor: "#ff7b4f",
    // backgroundColor: "gray",
    width: "100%",
    height: "100vh",
    // justifyContent: "center",
    // alignItems: "center",
    color: "white",
};

const testStyle = {
    // flex: 1,
    // backgroundColor: "blue",
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
    fontSize: "15px",
    margin: 0,
    padding: 0,
};

const divPageSectionStyle = {
    // margin: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#ff7b4f",
    // width: "100px",
    // height: "100px",
    // borderRadius: 50,
};

const HomePage = () => {
    return (
        <MyContainer size="mainContainer">
            <MyContainer
                justifyContent="space-around"
                minWidth="480px"
                minHeight="580px"
            >
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
                                        <MyButtonLink
                                            pathname="/auth"
                                            text="HIRE"
                                        />
                                    </MyColumn>
                                    <MyColumn columnWidth={8}>
                                        <MyButtonLink
                                            pathname="/auth"
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
            <div className="homeChildDiv" style={divPageSectionStyle}>
                <MyDivAbsolute>
                    <h1 style={titleStyle}>OUR MISSION</h1>
                </MyDivAbsolute>
            </div>
            <div className="homeChildDiv" style={divPageSectionStyle}>
                <MyContainer>
                    <h1 style={titleStyle}>FEEDBACK</h1>
                </MyContainer>
            </div>
            <div className="homeChildDiv" style={divPageSectionStyle}>
                <h1 style={titleStyle}>CONTACT US</h1>
            </div>
            <MyContainer backgroundColor="white" flexDirection="row">
                <MyContainer
                    backgroundColor="red"
                    overrideStyle={{ borderWidth: 10, borderRadius: 20 }}
                />
                <MyContainer
                    backgroundColor="blue"
                    overrideStyle={{ borderWidth: 10, borderColor: "blue" }}
                />
                <MyContainer backgroundColor="green" />
                <MyContainer backgroundColor="orange" opacity=".75">
                    <MyContainer
                        size="fixed"
                        fixedWidth="150px"
                        // fixedHeight="150px"
                        backgroundColor="black"
                    />
                </MyContainer>
            </MyContainer>
            <MyContainer size="fitContent" backgroundColor="black">
                <MyContainer
                    size="fixed"
                    fixedWidth="100%"
                    fixedHeight="100vh"
                    backgroundColor="lightBlue"
                />
                <MyContainer backgroundColor="orange" />
            </MyContainer>
            <MyContainer backgroundColor="pink" flexDirection="row">
                <MyContainer backgroundColor="darkBlue" />
                <MyContainer backgroundColor="brown" />
            </MyContainer>
            <MyContainer backgroundColor="darkBlue">
                <h4 style={rightsReservedStyle}>OBBERS © 2019</h4>
                <h4 style={rightsReservedStyle}>All Rights Reserved.</h4>
            </MyContainer>
        </MyContainer>
    );
};

export default HomePage;
