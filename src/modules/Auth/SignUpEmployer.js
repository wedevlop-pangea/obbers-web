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
    color: "#ff7b4f",
};
const subtitleStyle = {
    fontSize: "40px",
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
            <MyContainer
                justifyContent="space-around"
                minWidth="480px"
                minHeight="580px"
            >
                <MyContainer position="absolute" backgroundColor="white">
                    <MyContainer>
                        <h1 style={titleStyle}>Hire!</h1>
                        <h4 style={subtitleStyle}>Find the right people.</h4>
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
