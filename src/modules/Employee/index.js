// @flow

/**
 * Sections or Scenes or Pages or Screens
 * Module Content Inside This Component Div
 * Proly, create section/scene/page/screen on another page (section, screen)
 * Proly, this module could be the scene or page (scene, page) who integrates sections/screens
 */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { testValue: 1 };
    }

    componentDidMount() {
        if (this.props.isAuthenticated !== true) {
            this.props.history.push(`/`);
        }
    }

    render() {
        const { backgroundColor, addStyle, children } = this.props;
        const { someValue } = this.state;

        const containerStyle = {
            backgroundColor: backgroundColor,
        };

        return (
            <MyContainer backgroundColor="#252525" size="mainContainer">
                <MyContainer backgroundColor="#252525" size="fitScreen">
                    <h1>Welcome {this.props.displayName}!</h1>
                    <h1>Welcome to Obbers</h1>
                    <h1>Find the right job!</h1>
                    <br />
                    <h1>Thanks for joining us!</h1>
                    <h1>Obbers Group</h1>
                </MyContainer>
            </MyContainer>
        );
    }
}

Employee.defaultProps = {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    addStyle: {},
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: (function() {
            if (
                state &&
                state.firebase &&
                state.firebase.auth &&
                state.firebase.auth.uid
            ) {
                return true;
            } else {
                return false;
            }
        })(),
        displayName: (function() {
            if (
                state &&
                state.firebase &&
                state.firebase.auth &&
                state.firebase.auth.displayName
            ) {
                return state.firebase.auth.displayName;
            } else {
                return "Guest";
            }
        })(),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // someAction: () => {
        //   dispatch(actionsFile.someAction());
        // },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee);
