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
import { firebaseSignOut } from "./store/actions";

class SignOut extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // if (this.props.auth.isAuthenticated === true) {
        this.props.firebaseSignOut();
        this.props.history.push(`/`);
        // }

        return (
            <MyContainer size="mainContainer">
                <MyContainer size="fitScreen" backgroundColor="white" />
            </MyContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // auth: state.auth,
        // isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        firebaseSignOut: () => {
            dispatch(firebaseSignOut());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOut);
