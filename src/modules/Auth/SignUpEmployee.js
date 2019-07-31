// @flow

// To Reuse for Other Components Replace this Text:
// FormEmployeeSignUp - Form Component, Form Name
// firebaseSignUpEmployee - Redux Action
// SignUpEmployee - Component Name

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
    FormEmployeeSignUp,
} from "./components";

import { connect } from "react-redux";
import { firebaseSignUpEmployee } from "./store/actions";

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

class SignUpEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleOnSubmit = credentials => {
        console.log("SignUpEmployee container handleOnSubmit called!");
        console.log(credentials);

        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;
        this.props.history.push(`/employee`);

        // CALL ACTION FUNCTION
        // this.props.someActionFunctionHere(args);
        // this.props.firebaseSignUpEmployee(credentials);

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
                        <h1 style={titleStyle}>Hire Me!</h1>
                        <h4 style={subtitleStyle}>Find the right job.</h4>
                    </MyContainer>
                    <br />
                    <MyContainer addStyle={{ width: "80%" }}>
                        <FormEmployeeSignUp onSubmit={this.handleOnSubmit} />
                    </MyContainer>
                    <br />
                    <a href="" style={thirdTextStyle}>
                        <strong>Damn! forgot my password</strong>
                    </a>
                    <br />
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
        firebaseSignUpEmployee: credentials => {
            dispatch(firebaseSignUpEmployee(credentials));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpEmployee);
