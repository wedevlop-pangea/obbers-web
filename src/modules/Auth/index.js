/**
 * Sections or Scenes or Pages or Screens
 * Module Content Inside This Component Div
 * Proly, create section/scene/page/screen on another page (section, screen)
 * Proly, this module could be the scene or page (scene, page) who integrates sections/screens
 */

import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

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

const AuthPage = () => {
    return (
        <div className="" style={homeContainerStyle}>
            <div className="homeChildDiv" style={divPageSectionStyle}>
                <h1 style={titleStyle}>AUTH PAGE</h1>
                <h6 style={titleStyle}>Load Hiring or Hire Me Form</h6>
            </div>
        </div>
    );
};

export default AuthPage;
