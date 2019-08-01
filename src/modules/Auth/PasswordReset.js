// @flow

// To Reuse for Other Components Replace this Text:
// FormForgotPassword - ReduxForm Component, Form Name
// firebaseSignIn - Redux Action
// SignIn - Component Name

import React, { Component } from "react";

import {
    // Layout
    MyContainer,
    MyGrid,
    MyRow,
    MyColumn,
    // Common
    MyLink,
    MyButton,
    MyForm,
    SampleForm,
    SampleFormRedux,
    MyModal,
    // Organisms Crucial Components
    CompanyLogo,
    FormForgotPassword,
} from "./components";

import { connect } from "react-redux";
import { firebaseSignIn } from "./store/actions";

const titleStyle = {
    fontSize: "40px",
    margin: 0,
    padding: 0,
    color: "white", // #ff7b4f
};
const subtitleStyle = {
    fontSize: "20px",
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

class PasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleOnSubmit = credentials => {
        console.log("SignIn container handleOnSubmit called!");
        console.log(credentials);

        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;
        this.props.history.push(`/`);

        // CALL ACTION FUNCTION
        // this.props.someActionFunctionHere(args);
        // this.props.firebaseSignIn(credentials);

        // DO SOMETHING WITH THE LOCAL STATE
        // this.setState(prevState => {
        //   return {
        //     ...prevState,
        //     modals: {
        //       ...prevState.modals,
        //       place: { visible: true }
        //     }
        //   };
        // });
    };

    render() {
        return (
            <MyContainer size="mainContainer" backgroundColor="#ff7b4f">
                <MyContainer
                    size="fitScreen"
                    backgroundColor="white"
                    flexDirection="column"
                    justifyContent="flex-start"
                >
                    <MyContainer
                        size="fitContentFullWidth"
                        backgroundColor="white"
                    >
                        <br />
                        <a href="/">
                            <CompanyLogo
                                theme="light"
                                size="medium"
                                backgroundColor="rgba(255, 255, 255, 0.0)"
                            />
                        </a>
                        <br />
                    </MyContainer>
                    <MyContainer
                        size="fitContentFullWidthHeight"
                        flexDirection="column"
                        justifyContent="center"
                        backgroundColor="#ff7b4f"
                        addStyle={{
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                        }}
                    >
                        <MyContainer size="fitContentFullWidth">
                            <h1 style={titleStyle}>Reset Password</h1>
                            <br />
                            <h4 style={subtitleStyle}>You need vitamin B-12</h4>
                            <br />
                            <MyContainer addStyle={{ width: "90%" }}>
                                <FormForgotPassword
                                    onSubmit={this.handleOnSubmit}
                                />
                            </MyContainer>
                        </MyContainer>
                    </MyContainer>
                </MyContainer>
            </MyContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // testProp: state.testProp
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // someAction: () => {
        //   dispatch(actionsFile.someAction());
        // },
        firebaseSignIn: credentials => {
            dispatch(firebaseSignIn(credentials));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordReset);
