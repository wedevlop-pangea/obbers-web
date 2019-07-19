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
    MyForm,
    SampleForm,
    SampleFormRedux,
    CompanyLogo,
} from "./components";

const titleStyle = {
    fontSize: "60px",
    margin: 0,
    padding: 0,
    color: "#ff7b4f",
};
const subtitleStyle = {
    fontSize: "20px",
    margin: 0,
    padding: 0,
    color: "#ff7b4f",
};
const thirdTextStyle = {
    fontSize: "15px",
    color: "#ff7b4f",
};
const rightsReservedStyle = {
    // fontSize: "15px",
    margin: 0,
    padding: 0,
};

const SignUpEmployer = () => {
    return (
        <MyContainer size="mainContainer">
            <MyContainer justifyContent="space-between">
                <MyContainer
                    position="absolute"
                    backgroundColor="white"
                    justifyContent="space-between"
                >
                    <MyContainer size="fitContent">
                        <CompanyLogo
                            theme="light"
                            size="medium"
                            backgroundColor="rgba(255, 255, 255, 0.0)"
                        />
                    </MyContainer>
                    <MyContainer size="fitContent">
                        <h1 style={titleStyle}>Hire!</h1>
                        <h4 style={subtitleStyle}>Find the right people.</h4>
                    </MyContainer>
                    <MyContainer size="fitContent">
                        <SampleFormRedux />
                    </MyContainer>
                </MyContainer>
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

export default SignUpEmployer;
