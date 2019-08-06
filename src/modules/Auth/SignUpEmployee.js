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

    componentWillMount() {
        if (this.props.isAuthenticated === true) {
            this.props.history.push(`/employee`);
        }
    }

    handleOnSubmit = employee => {
        console.log("SignUpEmployee container handleOnSubmit called!");
        console.log(employee);

        this.props.firebaseSignUpEmployee(this.props.formEmployeeSignUp.values);

        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;
        // this.props.history.push(`/employee`);

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
                    <br />
                    <MyContainer
                        size="fitContentFullWidth"
                        width="100%"
                        backgroundColor="#2f3542"
                    >
                        <br />
                        <br />
                        <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>
                            Obbers © 2019 <br /> All Rights Reserved.
                        </h4>
                        <br />
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
        formEmployeeSignUp: state.form.formEmployeeSignUp,
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // someAction: () => {
        //   dispatch(actionsFile.someAction());
        // },
        firebaseSignUpEmployee: employee => {
            dispatch(firebaseSignUpEmployee(employee));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpEmployee);
