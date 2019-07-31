// @flow

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
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

import { Segment, Header, Form, Button } from "semantic-ui-react";

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

class FormEmployerSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            testCategories: [
                { key: "category1", text: "Category 1", value: "category1" },
                { key: "category2", text: "Category 2", value: "category2" },
                { key: "category3", text: "Category 3", value: "category3" },
                { key: "category4", text: "Category 4", value: "category4" },
                { key: "category5", text: "Category 5", value: "category5" },
                { key: "category6", text: "Category 6", value: "category6" },
            ],
        };
    }

    handleOnSubmit = values => {
        console.log(values);
        // evt.preventDefault();
        // We can as well dispatch an action inside here or inside any condition
        // this.props.doSomeAction(actionArgument);
    };

    render() {
        const {
            autoComplete,
            disabledColor,
            enabledColor,
            backgroundColor,
            addContainerStyle,
            addFormStyle,
            children,
        } = this.props;

        const {
            history,
            initialValues,
            anyTouched, // will be true after click inside and out of a text input...,
            valid,
            invalid, // we wont be able to submit, if we've got any validation errors ...,
            submitting, // we wont be able to submit, once we hit submit and form is submitting...,
            pristine, // we wont be able to submit, if we dont touch the inputs or update their initial values ...,
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
                    // onSubmit={this.props.handleSubmit(this.handleOnSubmit)}
                    onSubmit={this.props.onSubmit}
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
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.0)",
                                    }}
                                    name="name"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Name"
                                />
                                <Field
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.0)",
                                    }}
                                    name="lastName"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Last Name"
                                />
                                <Field
                                    name="email"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Email"
                                />
                                <Field
                                    name="confirmEmail"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Confirm Email"
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    component={TextInput}
                                    placeholder="Password"
                                />
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    component={TextInput}
                                    placeholder="Confirm Password"
                                />
                                <Field
                                    name="companyName"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Company Name"
                                />
                            </MyColumn>
                            <MyColumn
                                columnWidth={8}
                                // justifyContent="flex-start"
                                // alignItems="flex-start"
                            >
                                <Field
                                    name="country"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Country"
                                />
                                <Field
                                    name="zipCode"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Zip Code"
                                />
                                <Field
                                    name="city"
                                    type="text"
                                    component={TextInput}
                                    placeholder="City"
                                />
                                <Field
                                    name="state"
                                    type="text"
                                    component={TextInput}
                                    placeholder="State"
                                />
                                <Field
                                    name="addressLine1"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Address Line 1"
                                />
                                <Field
                                    name="addressLine2"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Address Line 2"
                                />
                                <Field
                                    name="phone"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Phone"
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
                                    SIGN UP
                                </Button>
                                <br />
                            </MyColumn>
                        </MyRow>
                    </MyGrid>
                </Form>
            </Segment>
        );
    }
}

FormEmployerSignUp.defaultProps = {
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
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
            companyName: "",
            country: "",
            city: "",
            addressLine1: "",
            addressLine2: "",
            state: "",
            zipCode: "",
            phone: "",
            notes: "",
            category: "",
            categories: "",
            date: "",
        },
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
)(reduxForm({ form: "formEmployerSignUp", validate })(FormEmployerSignUp));
