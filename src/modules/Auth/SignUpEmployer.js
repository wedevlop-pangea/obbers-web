// @flow

// To Reuse for Other Components Replace this Text:
// FormEmployerSignUp - ReduxForm Component, Form Name
// firebaseSignUpEmployer - Redux Action
// SignUpEmployer - Component Name

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
    FormEmployerSignUp,
} from "./components";

import { connect } from "react-redux";
import { firebaseSignUpEmployer } from "./store/actions";

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

class SignUpEmployer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleOnSubmit = credentials => {
        console.log("SignUpEmployer container handleOnSubmit called!");
        console.log(credentials);

        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;
        this.props.history.push(`/employeer`);

        // CALL ACTION FUNCTION
        // this.props.someActionFunctionHere(args);
        // this.props.firebaseSignUpEmployer(credentials);

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
            <MyContainer size="mainContainer" backgroundColor="white">
                <MyContainer size="fitContentFullWidth" backgroundColor="white">
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
                    size="fitContent"
                    backgroundColor="#ff7b4f"
                    addStyle={{
                        borderTopLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                    }}
                >
                    <br />
                    <MyContainer size="fitContent">
                        <h1 style={titleStyle}>Hire!</h1>
                        <h4 style={subtitleStyle}>Find the right people</h4>
                    </MyContainer>
                    <br />
                    <MyContainer addStyle={{ width: "80%" }}>
                        <FormEmployerSignUp onSubmit={this.handleOnSubmit} />
                    </MyContainer>
                    <br />
                    <br />
                    <MyContainer
                        size="fitContentFullWidth"
                        width="100%"
                        backgroundColor="#2f3542"
                    >
                        <br />
                        <h4 style={{ fontSize: "14px" }}>
                            Obbers © 2019 <br /> All Rights Reserved.
                        </h4>
                        <br />
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
        firebaseSignUpEmployer: credentials => {
            dispatch(firebaseSignUpEmployer(credentials));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpEmployer);
