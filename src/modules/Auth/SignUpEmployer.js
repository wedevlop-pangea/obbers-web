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
    fontSize: "30px",
    margin: 0,
    padding: 0,
    color: "white", // #ff7b4f
};
const subtitleStyle = {
    fontSize: "15px",
    margin: 0,
    padding: 0,
    color: "white", // #ff7b4f
};
const thirdTextStyle = {
    fontSize: "15px",
    color: "white", // #ff7b4f
};
const rightsReservedStyle = {
    // fontSize: "15px",
    margin: 0,
    padding: 0,
};

const SignUpEmployer = () => {
    return (
        <MyContainer size="mainContainer" backgroundColor="#ff7b4f">
            <MyContainer size="fitContent">
                <br />
                <CompanyLogo
                    theme="light"
                    size="medium"
                    backgroundColor="rgba(255, 255, 255, 0.0)"
                />
                <br />
            </MyContainer>
            <MyContainer size="fitContent" backgroundColor="#ff7b4f">
                <br />
                <MyContainer size="fitContent">
                    <h1 style={titleStyle}>Hire!</h1>
                    <h4 style={subtitleStyle}>Find the right people.</h4>
                </MyContainer>
                <br />
                <MyContainer overrideStyle={{ width: "80%" }}>
                    <SampleFormRedux />
                </MyContainer>
                <br />
            </MyContainer>
        </MyContainer>
    );
};

/*
<MyLink bold>{"Have an account?"}</MyLink>
<MyLink italic>Sign In</MyLink>



<MyContainer size="mainContainer">
    <MyContainer justifyContent="space-between">
        <MyContainer
            size="fitContent"
            position="absolute"
            backgroundColor="white"
            justifyContent="space-evenly"
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
    <MyContainer size="fitContent" backgroundColor="black">
        <br />
        <h4 style={rightsReservedStyle}>OBBERS © 2019</h4>
        <h4 style={rightsReservedStyle}>All Rights Reserved.</h4>
        <br />
    </MyContainer>
</MyContainer>


*/

export default SignUpEmployer;
