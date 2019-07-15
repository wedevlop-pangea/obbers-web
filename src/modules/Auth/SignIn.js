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
} from "./components";

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

const SignIn = () => {
    return (
        <MyContainer size="mainContainer">
            <MyContainer
                justifyContent="space-around"
                minWidth="480px"
                minHeight="580px"
            >
                <MyContainer position="absolute">
                    <MyContainer>
                        <h1 style={titleStyle}>Welcome back!</h1>
                        <h4 style={subtitleStyle}>Find people or work.</h4>
                    </MyContainer>

                    <MyContainer justifyContent="space-evenly">
                        <MyGrid>
                            <MyRow>
                                <MyColumn columnWidth={8}>
                                    <MyButton
                                        asLink
                                        pathname="/auth"
                                        text="HIRE"
                                    />
                                </MyColumn>
                                <MyColumn columnWidth={8}>
                                    <MyButton
                                        asLink
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

export default SignIn;
