// @flow

// To Reuse for Other Components Replace this Text:
// FormSignIn - ReduxForm Component, Form Name
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
    FormSignIn,
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
    fontSize: "16px",
    fontWeight: "bold",
    color: "white", // #ff7b4f
};
const rightsReservedStyle = {
    // fontSize: "15px",
    margin: 0,
    padding: 0,
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleOnSubmit = credentials => {
        console.log("SignIn container - handleOnSubmit");
        console.log(credentials);

        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;
        // this.props.history.push(`/employee`);

        // CALL ACTION FUNCTION
        // this.props.someActionFunctionHere(args);
        this.props.firebaseSignIn(credentials);

        // const signIn = this.props.firebaseSignIn(credentials);
        // console.log("----------------------");
        // console.log("SignIn Container - signIn results");
        // console.log(signIn);
        // console.log("firebaseSignIn.code");
        // console.log(firebaseSignIn.code);
        // console.log("firebaseSignIn.message");
        // console.log(firebaseSignIn.message);

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
        if (this.props.auth.isAuthenticated === true) {
            this.props.history.push(`/employee`);
        }

        return (
            <MyContainer size="mainContainer">
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
                            <h1 style={titleStyle}>Welcome back!</h1>
                            <br />
                            <h4 style={subtitleStyle}>We've missed you.</h4>
                            <br />
                            <MyContainer addStyle={{ width: "80%" }}>
                                <FormSignIn
                                    onSubmit={this.handleOnSubmit}
                                    funcA={this.props.firebaseSignIn}
                                />
                            </MyContainer>
                            <br />
                            <a
                                href="/accounts/password/reset/"
                                style={thirdTextStyle}
                            >
                                <strong>Forgot my password</strong>
                            </a>
                        </MyContainer>
                    </MyContainer>
                </MyContainer>
            </MyContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.isAuthenticated,
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
)(SignIn);
