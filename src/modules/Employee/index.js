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
    fontSize: "15px",
    color: "white",
};
const rightsReservedStyle = {
    // fontSize: "15px",
    margin: 0,
    padding: 0,
};

const Employee = () => {
    return (
        <MyContainer backgroundColor="#252525" size="mainContainer">
            <MyContainer backgroundColor="#252525" size="fitScreen">
                <h1>Employee Screen</h1>
            </MyContainer>
        </MyContainer>
    );
};

/*
<MyLink bold>{"Have an account?"}</MyLink>
<MyLink italic>Sign In</MyLink>
*/

export default Employee;
