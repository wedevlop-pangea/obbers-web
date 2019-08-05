// @flow

// control + shift + D

// THIS FORM
// This form is connected to Redux Firebase and Has Error Label Set Up

/**
 * Form onSubmit
 * onSubmit={this.props.handleSubmit(this.handleOnSubmit)}
 * this form here has a prop onSubmit
 * to this form onSubmit function we do the next thing:
 * we pass it the redux-form function this.props.handleSubmit
 * and to this function we pass it our own function called handleOnSubmit()
 * this handleOnSubmit() receives our form input values as an argument object
 * handleOnSubmit(values)
 * so we can acess our form input values from within that object as keys
 */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, SubmissionError } from "redux-form";
import {
    createValidator,
    composeValidators,
    combineValidators,
    isRequired,
    isRequiredIf,
    isAlphabetic,
    isAlphaNumeric,
    isNumeric,
    hasLengthBetween,
    hasLengthGreaterThan,
    hasLengthLessThan,
    isOneOf,
    matchesPattern,
    matchesField,
    hasError,
    hasErrorAt,
    hasErrorOnlyAt,
} from "revalidate";

import { Segment, Header, Form, Button, Label } from "semantic-ui-react";

import MyGrid from "../../layout/MyGrid";
import MyRow from "../../layout/MyRow";
import MyColumn from "../../layout/MyColumn";

import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import SelectInput from "./components/SelectInput";
import DateInput from "./components/DateInput";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const isValidEmail = createValidator(
    message => value => {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return message;
        }
    },
    "Invalid email address"
);

const validate = combineValidators({
    // name: isRequired({ message: "Name is required" }),

    name: composeValidators(
        isRequired({ message: "Name is required" }),
        isAlphabetic({ message: "Must not contain numeric values" })
    )(),

    lastName: composeValidators(
        isRequired({ message: "Last Name is required" }),
        isAlphabetic({ message: "Must not contain numeric values" })
    )(),
    email: composeValidators(
        isRequired({ message: "Email is required" }),
        isValidEmail
    )(),
    confirmEmail: composeValidators(
        isRequired({ message: "Confirm Email is required" }),
        matchesField("email")({
            message: "Emails do not match",
        })
    )(),
    password: composeValidators(
        isRequired({ message: "Password is required" }),
        hasLengthGreaterThan(7)({
            message: "Password must contain at least 8 characters",
        })
    )(),
    confirmPassword: composeValidators(
        isRequired({ message: "Confirm Password is required" }),
        matchesField("password")({
            message: "Passwords do not match",
        })
    )(),
    companyName: composeValidators(
        isRequired({ message: "Company Name is required" })
    )(),
    country: composeValidators(
        isRequired({ message: "Country is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    city: composeValidators(
        isRequired({ message: "City is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    addressLine1: composeValidators(
        isRequired({ message: "Address Line 1 is required" })
    )(),
    // addressLine2: composeValidators(
    //     isRequired({ message: "Address Line 2 is required" }),
    // )(),
    state: composeValidators(
        isRequired({ message: "State is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    zipCode: composeValidators(
        isRequired({ message: "Zip Code is required" })
        // isNumeric({ message: "Must only contain numeric values" }),
    )(),
    // phone: isRequired("phone"),
    phone: composeValidators(
        isRequired({ message: "Phone is required" }),
        isNumeric({ message: "Must only contain numeric values" }),
        hasLengthGreaterThan(10)({
            message: "Phone must contain more than 10 numbers",
        })
    )(),
    notes: composeValidators(
        hasLengthLessThan(150)({
            message: "Note must contain less than 150 characters",
        })
    )(),
    // category: composeValidators(
    //     isRequired({ message: "Category is required" }),
    // )(),
    // // // isOneOf(['foo', 'bar'])('My Field')('baz');
    // // // 'My Field must be one of ["foo","bar"]'
    // categories: composeValidators(
    //     isRequired({ message: "Categories is required" }),
    // )(),
    // // date: isRequired("date"),
    // // date: isRequired({ message: "Date is required" }),
    // date: composeValidators(
    //     isRequired({ message: "Date is required" }),
    // )(),
});

class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleOnSubmit = async values => {
        console.log(values);
        // values.preventDefault();
        // We can as well dispatch an action inside here or inside any condition
        // this.props.doSomeAction(actionArgument);

        console.log("---------------------");
        console.log("FormSignIn - handleOnSubmit");

        // const submission = this.props.onSubmit({
        //     email: values.email,
        //     password: values.password,
        // });

        // WORKAROUND #1
        return this.props.onSubmit({
            email: values.email,
            password: values.password,
        });

        // // WORKAROUND #2
        // const { onSubmit } = this.props;
        // const submitPromise = await onSubmit(values);
        // console.log("---------------------");
        // console.log("submitPromise");
        // console.log(await submitPromise);
        //
        // if (submitPromise && submitPromise.catch) {
        //     submitPromise.catch(() => null);
        // }

        // // WORKAROUND #3
        // const { onSubmit, funcA } = this.props;
        // // const submitPromise = await onSubmit(values);
        // const submitPromise = await funcA(values);
        //
        // console.log("---------------------");
        // console.log("SignIn Form - handleOnSubmit");
        //
        // let promise = new Promise((resolve, reject) => {
        //     // const submitPromise = onSubmit(values);
        //     // onSubmit(values);
        //     if (submitPromise instanceof Error) {
        //         reject();
        //     }
        //     resolve();
        // }).then(result => {
        //     console.log("----------------------");
        //     console.log("result");
        //     console.log(result);
        //     if (result instanceof Error) {
        //         console.log("---------------------");
        //         console.log("result instanceof Error");
        //         console.log(result);
        //         throw new SubmissionError({
        //             // _error: error.message,
        //             _error: result.message,
        //         });
        //     }
        //     if (result instanceof Error && result.validationErrors) {
        //         console.log("---------------------");
        //         console.log(
        //             "result instanceof Error && result.validationErrors"
        //         );
        //         console.log(result);
        //         // throw new SubmissionError(result.validationErrors);
        //         throw new SubmissionError({
        //             // _error: error.message,
        //             _error: result.message,
        //         });
        //     }
        //     // if no errors, just push to route page
        //     console.log("---------------------");
        //     console.log("no errors found");
        // });
    };

    // renderError = () => {
    //     console.log("SignInForm renderError");
    //     console.log(this.props.reduxFormError);
    //
    //     if (this.props.reduxFormError.length > 0) {
    //         return (
    //             <Label style={labelStyle} color="#e74c3c">
    //                 {this.props.reduxFormError}
    //             </Label>
    //         );
    //     }
    //
    //     // if (this.props.reduxFormError.length > 0 && valid === false) {
    //     //     shouldRenderCustomError = true;
    //     //     return true;
    //     // }
    // };

    render() {
        console.log("redux-form props:");
        console.log(this.props);

        // redux-form my custom props - logic
        const { handleSubmit, error, shouldRenderCustomError } = this.props;

        // redux-form my custom props - UI
        const {
            autoComplete,
            disabledColor,
            enabledColor,
            backgroundColor,
            addContainerStyle,
            addFormStyle,
            children,
        } = this.props;

        // redux-form props
        const {
            history,
            initialValues,
            anyTouched, // will be true after click inside and out of a text input...,
            valid,
            invalid, // we wont be able to submit, if we've got any validation errors ...,
            submitting, // we wont be able to submit, once we hit submit and form is submitting...,
            pristine, // we wont be able to submit, if we dont touch the inputs or update their initial values ...,
            submitFailed,
        } = this.props;

        const { name, lastName, phone } = this.state;

        let containerStyle = {
            backgroundColor: backgroundColor,
            borderColor: "rgba(255, 255, 255, 1.0)",
            borderStyle: "solid",
            borderWidth: "5px",
            borderLeftWidth: "10px",
            borderTopLeftRadius: "0px",
            borderTopRighRadius: "0px",
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "0px",
            display: "flex",
            flowDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // width: "300px",
            // BORDER
            // borderLeftColor: "#26de81",
            // borderLeftColor: "#32ff7e",
            // borderLeftColor: "#33d9b2",
            // outline: "thick solid #33d9b2"
        };

        const formStyle = {
            // backgroundColor: backgroundColor,
            // borderStyle: "dotted",
            // borderWidth: "0px",
            // borderSize: "0px",
            // border: 0,
            // display: "flex",
            // flowDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // width: "300px",
        };

        const labelStyle = {
            marginTop: "3px",
            width: "100%",
            height: "50px",
            // borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
            // borderTopLeftRadius: "50px",
            // borderTopRightRadius: "50px",
            backgroundColor: "#e74c3c", // #1 red opaque
            // backgroundColor: "#F44336", // #1 red bright minimal
            // backgroundColor: "#FF5722", // #2
            // backgroundColor: "#B71C1C", // #1 red dark strong
            // backgroundColor: "#F57F17",
            // backgroundColor: "#BF360C",
            // backgroundColor: "#EF5350",
            // backgroundColor: "#FF7043",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
        };

        if (this.props.reduxFormError.length > 0 && valid === false) {
            shouldRenderCustomError = true;
            // return true;
        }

        console.log("form");
        console.log(this.props);

        // Add different styles or actions based on form validation stastus
        // Form has not been touched at all
        if (anyTouched === false && pristine) {
            // let addStyle = { borderColor: "white" };
            let addStyle = { borderLeftColor: "lightGray" };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // Form has been touched and has invalid input values
        if (anyTouched === true && invalid) {
            // let addStyle = { borderLeftColor: "#ff3f34" };
            let addStyle = {
                // borderColor: "#ff5e57", // #ff6b6b
                borderLeftColor: "#ff3f34", // #ee5253
            };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // Form has been touched and has valid input values
        if (anyTouched === true && valid) {
            // let addStyle = { borderLeftColor: "#26de81" };
            let addStyle = {
                // borderColor: "#26de81", // #0be881 #26de81
                borderLeftColor: "#05c46b", // #05c46b
            };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // Form is being sumbitted
        if (submitting) {
            // let addStyle = { borderLeftColor: "#55E6C1" };
            let addStyle = { borderLeftColor: "#55E6C1" };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // if (invalid || submitting || pristine) {
        //     let addStyle = { borderLeftColor: "red" };
        //     containerStyle = { ...containerStyle, ...addStyle };
        // }

        return (
            <Segment
                // {...this.props}
                style={{ ...containerStyle, ...addContainerStyle }}
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                <Form
                    style={{ ...formStyle, ...addFormStyle }}
                    // this.props.handleSubmit below is a redux-form prop function
                    // this.props.handleSubmit is important cause it passes our redux form values
                    // in the first argument to the function that we crate this case handleOnSubmit(values)
                    // will receive our form input names and values
                    // this.handleOnSubmit below is a function inside this class based component
                    onSubmit={this.props.handleSubmit(this.handleOnSubmit)}
                    // onSubmit={this.handleOnSubmit}
                    autoComplete={autoComplete}
                >
                    <MyGrid>
                        <MyRow
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <MyColumn
                                columnWidth={8}
                                // justifyContent="flex-start"
                                // alignItems="flex-start"
                            >
                                <Field
                                    name="email"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Email"
                                />
                            </MyColumn>
                            <MyColumn
                                columnWidth={8}
                                // justifyContent="flex-start"
                                // alignItems="flex-start"
                            >
                                <Field
                                    name="password"
                                    type="password"
                                    component={TextInput}
                                    placeholder="Password"
                                />
                            </MyColumn>
                        </MyRow>
                        <MyRow>
                            <MyColumn columnWidth={16}>
                                <br />
                                <Button
                                    disabled={invalid || submitting || pristine}
                                    positive
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        height: "60px",
                                        borderRadius: "50px",
                                        // backgroundColor: "red",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        backgroundColor: invalid
                                            ? disabledColor
                                            : enabledColor,
                                    }}
                                >
                                    SIGN IN
                                </Button>
                                <br />
                            </MyColumn>
                        </MyRow>
                        {(() => {
                            console.log("running if statement inside JSX");
                            console.log("reduxFormError");
                            console.log(this.props.reduxFormError);
                            if (
                                this.props.reduxFormError.length > -1 &&
                                submitFailed
                            ) {
                                console.log("returning shit");
                                return (
                                    <Label style={labelStyle} color="#e74c3c">
                                        {this.props.reduxFormError}
                                    </Label>
                                );
                            }
                            {
                                this.props.reduxFormError.length > 0 ? (
                                    <Label style={labelStyle} color="#e74c3c">
                                        {this.props.reduxFormError}
                                    </Label>
                                ) : null;
                            }
                            // switch (this.state.color) {
                            //   case "red":   return "#FF0000";
                            //   case "green": return "#00FF00";
                            //   case "blue":  return "#0000FF";
                            //   default:      return "#FFFFFF";
                            // }
                        })()}
                    </MyGrid>
                </Form>
            </Segment>
        );
    }
}

/*
{error && (
    <Label style={labelStyle} color="#e74c3c">
        {error}
    </Label>
)}
//
// {this.props.reduxFormError.length > 0 ? (
//     <Label style={labelStyle} color="#e74c3c">
//         {this.props.reduxFormError}
//     </Label>
// ) : null}
// {this.renderError()}
//
// {this.renderError() ? (
//     <Label style={labelStyle} color="#e74c3c">
//         {this.props.reduxFormError}
//     </Label>
// ) : null}
//
// {shouldRenderCustomError === true ? (
//     <Label style={labelStyle} color="#e74c3c">
//         {this.props.reduxFormError}
//     </Label>
// ) : null}
{
  submitFailed ? {this.renderError} : null
}

*/

FormSignIn.defaultProps = {
    shouldRenderCustomError: false,
    autoComplete: "off", // or use "on"
    disabledColor: "rgba(76, 76, 76, 1.0) !important",
    enabledColor: "rgba(6, 212, 64, 1.0)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    addContainerStyle: {},
    addFormStyle: {},
};

// const mapStateToProps = state => {
const mapStateToProps = (state, ownProps) => {
    return {
        // testProp: state.testProp
        initialValues: state.formSignIn,
        reduxFormError: state.auth.reduxFormError,
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
    mapStateToProps, // or mapState
    mapDispatchToProps // or actions
)(reduxForm({ form: "formSignIn", validate })(FormSignIn));
