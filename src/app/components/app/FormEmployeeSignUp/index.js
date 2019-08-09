// @flow

// THIS FORM
// This form has the DateInput developed with more functionalty as well as
// this form,

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

import { Segment, Header, Form, Button, Label } from "semantic-ui-react";

import MyGrid from "../../layout/MyGrid";
import MyRow from "../../layout/MyRow";
import MyColumn from "../../layout/MyColumn";

import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import SelectInput from "./components/SelectInput";
import DateInput from "./components/DateInput";
import DateInput3 from "./components/DateInput3";

import BirthMonth from "./components/BirthMonth";
import BirthDay from "./components/BirthDay";
import BirthYear from "./components/BirthYear";

import PhoneCountryCode from "./components/PhoneCountryCode";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const months = [
    { key: "january", text: "January", value: "1" },
    { key: "february", text: "February", value: "2" },
    { key: "march", text: "March", value: "3" },
    { key: "april", text: "April", value: "4" },
    { key: "may", text: "May", value: "5" },
    { key: "june", text: "June", value: "6" },
    { key: "july", text: "July", value: "7" },
    { key: "august", text: "August", value: "8" },
    { key: "september", text: "September", value: "9" },
    { key: "october", text: "October", value: "10" },
    { key: "november", text: "November", value: "11" },
    { key: "december", text: "December", value: "12" },
];

const phoneCountryCodes = [
    { key: "us", text: "United States +1", value: 1 },
    { key: "mexico", text: "Mexico +52", value: 52 },
];

const industries = [
    {
        key: "industry1",
        text: "Construction and Extractions",
        value: "1",
    },
    {
        key: "industry2",
        text: "Farming, Fishing and Forestry",
        value: "2",
    },
    {
        key: "industry3",
        text: "Food Preparation and Serving",
        value: "3",
    },
    {
        key: "industry4",
        text: "Installation, Maintenance and Repair",
        value: "4",
    },
    { key: "industry5", text: "Production", value: "5" },
    {
        key: "industry6",
        text: "Transportation and Material Moving",
        value: "6",
    },
];

const labelStyle = {
    marginTop: "3px",
    width: "100%",
    height: "50px",
    // borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    // borderTopLeftRadius: "50px",
    // borderTopRightRadius: "50px",
    // backgroundColor: "#e74c3c", // #1 red opaque
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
    fontSize: "16px",
};

const reduxFormErrorStyle = {
    marginTop: "3px",
    width: "100%",
    height: "60px",
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
    fontSize: "16px",
};

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
    // birthdate: composeValidators(
    //     isRequired({ message: "Birthdate is required" }),
    //     // isAlphaNumeric({ message: "Must only contain numeric values" }),
    //     hasLengthLessThan(11)({
    //         message: "Date must contain 10 or less characters",
    //     })
    // )(),
    // birthmonth: composeValidators(
    //     isRequired({ message: "Month is required" })
    //     // isOneOf(months)
    // )(),
    birthday: composeValidators(isRequired({ message: "Day is required" }))(),
    birthyear: composeValidators(isRequired({ message: "Year is required" }))(),
    country: composeValidators(
        isRequired({ message: "Country is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    zipCode: composeValidators(
        isRequired({ message: "Zip Code is required" })
        // isNumeric({ message: "Must only contain numeric values" }),
    )(),
    city: composeValidators(
        isRequired({ message: "City is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    state: composeValidators(
        isRequired({ message: "State is required" })
        // isOneOf(['foo', 'bar'])('My Field')('baz');
        // // 'My Field must be one of ["foo","bar"]'
    )(),
    addressLine1: composeValidators(
        isRequired({ message: "Address Line 1 is required" })
    )(),
    // addressLine2: composeValidators(
    //     isRequired({ message: "Address Line 2 is required" }),
    // )(),
    // phone: isRequired("phone"),
    // phone: composeValidators(
    //     isRequired({ message: "Phone is required" }),
    //     isNumeric({ message: "Must only contain numeric values" }),
    //     hasLengthGreaterThan(10)({
    //         message: "Phone must contain more than 10 numbers",
    //     })
    // )(),
    // phoneCountryCode: composeValidators(
    //     isRequired({ message: "Country Code is required" })
    //     // isOneOf(phoneCountryCodes)
    // )(),
    // phoneArea: composeValidators(
    //     isRequired({ message: "Area is required" }),
    // )(),
    phoneNumber: composeValidators(
        isRequired({ message: "Phone is required" }),
        isNumeric({ message: "Must only contain numeric values" }),
        hasLengthGreaterThan(4)({
            message: "Phone must contain at least 5 numbers",
        }),
        hasLengthLessThan(11)({
            message: "Phone must contain less than 12 numbers",
        })
    )(),
    // industry: composeValidators(
    //     isRequired({ message: "Industry is required" }),
    //     // isOneOf(industries)
    //     // hasLengthGreaterThan(0)({
    //     //     message: "Select an Industry",
    //     // })
    // )(),
    // notes: composeValidators(
    //     hasLengthLessThan(150)({
    //         message: "Note must contain less than 150 characters",
    //     })
    // )(),
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

class FormEmployeeSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            months: [
                { key: "january", text: "January", value: "1" },
                { key: "february", text: "February", value: "2" },
                { key: "march", text: "March", value: "3" },
                { key: "april", text: "April", value: "4" },
                { key: "may", text: "May", value: "5" },
                { key: "june", text: "June", value: "6" },
                { key: "july", text: "July", value: "7" },
                { key: "august", text: "August", value: "8" },
                { key: "september", text: "September", value: "9" },
                { key: "october", text: "October", value: "10" },
                { key: "november", text: "November", value: "11" },
                { key: "december", text: "December", value: "12" },
            ],
            phoneCountryCodes: [
                { key: "us", text: "United States +1", value: 1 },
                { key: "mexico", text: "Mexico +52", value: 52 },
            ],
            industries: [
                {
                    key: "industry1",
                    text: "Construction and Extractions",
                    value: "1",
                },
                {
                    key: "industry2",
                    text: "Farming, Fishing and Forestry",
                    value: "2",
                },
                {
                    key: "industry3",
                    text: "Food Preparation and Serving",
                    value: "3",
                },
                {
                    key: "industry4",
                    text: "Installation, Maintenance and Repair",
                    value: "4",
                },
                { key: "industry5", text: "Production", value: "5" },
                {
                    key: "industry6",
                    text: "Transportation and Material Moving",
                    value: "6",
                },
            ],
            testCategories: [
                { key: "category1", text: "Category 1", value: "category1" },
                { key: "category2", text: "Category 2", value: "category2" },
                { key: "category3", text: "Category 3", value: "category3" },
                { key: "category4", text: "Category 4", value: "category4" },
                { key: "category5", text: "Category 5", value: "category5" },
                { key: "category6", text: "Category 6", value: "category6" },
            ],
            skills: [
                { key: "category1", text: "Welder", value: "welder" },
                { key: "category2", text: "Electrician", value: "electrician" },
                { key: "category3", text: "Plumber", value: "plumber" },
                { key: "category4", text: "Carpenter", value: "carpenter" },
                {
                    key: "category5",
                    text: "Air Conditioning",
                    value: "aircondition",
                },
            ],
        };
    }

    handleOnSubmit = values => {
        console.log(values);
        // evt.preventDefault();
        // We can as well dispatch an action inside here or inside any condition
        // this.props.doSomeAction(actionArgument);
    };

    renderError = isFormValid => {
        console.log("SignInForm renderError");
        console.log(this.props.reduxFormError);

        if (
            this.props.reduxFormError.length > 0
            // isFormValid !== true
            // isFormSubmitting !== true
        ) {
            return (
                <Label style={reduxFormErrorStyle} color="#e74c3c">
                    {this.props.reduxFormError}
                </Label>
            );
        }
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

        const { dirt, visited } = this.props;

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

        console.log("REDUX-FORM: EMPLOYEE SIGNUP");
        console.log(this.props);

        // Add different styles or actions based on form validation status
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

        const labelTitleStyle = {
            marginTop: "3px",
            width: "100%",
            height: "25px",
            // borderBottomLeftRadius: "50px",
            // borderBottomRightRadius: "50px",
            // borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            backgroundColor: "gray", // #1 red opaque
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
            fontSize: "14px",
        };

        // console.log("Employee Form Values");
        // console.log(this.props.state.form.formEmployeeSignUp.values);

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
                    initialValues={this.props.initialValues}
                >
                    <MyGrid>
                        <br />
                        <MyRow
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <MyColumn
                                columnWidth={8}
                                // addStyle={{ maxWidth: "100px" }}
                                // justifyContent="flex-start"
                                // alignItems="flex-start"
                            >
                                <Label style={labelTitleStyle}>
                                    {"Account"}
                                </Label>
                                <Field
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.0)",
                                    }}
                                    name="name"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Name"
                                    title="Name"
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
                                    title="Last Name"
                                />
                                <Field
                                    name="email"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Email"
                                    title="Email"
                                />
                                <Field
                                    name="confirmEmail"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Confirm Email"
                                    title="Confirm Email"
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    component={TextInput}
                                    placeholder="Password"
                                    title="Password"
                                />
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    component={TextInput}
                                    placeholder="Confirm Password"
                                    title="Confirm Password"
                                />
                                <br />
                                <Label style={labelTitleStyle}>
                                    {"Date of Birth"}
                                </Label>
                                <MyRow
                                    style={
                                        {
                                            // width: "20px",
                                            // borderColor: "red",
                                            // borderStyle: "solid",
                                            // borderWidth: "20px",
                                        }
                                    }
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                    <Field
                                        name="birthmonth"
                                        component={BirthMonth}
                                        placeholder="Month"
                                        title="Month"
                                        options={this.state.months}
                                    />
                                </MyRow>
                                <MyRow
                                    style={
                                        {
                                            // width: "20px",
                                            // borderColor: "red",
                                            // borderStyle: "solid",
                                            // borderWidth: "20px",
                                        }
                                    }
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                    <Field
                                        name="birthday"
                                        component={BirthDay}
                                        placeholder="Day"
                                        title="Day"
                                    />
                                    <Field
                                        name="birthyear"
                                        component={BirthYear}
                                        placeholder="Year"
                                        title="Year"
                                    />
                                </MyRow>
                            </MyColumn>
                            <MyColumn
                                columnWidth={8}
                                // justifyContent="flex-start"
                                // alignItems="flex-start"
                            >
                                <Label style={labelTitleStyle}>
                                    {"Address"}
                                </Label>
                                <Field
                                    name="country"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Country"
                                    title="Country"
                                />
                                <Field
                                    name="zipCode"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Zip Code"
                                    title="Zip Code"
                                />
                                <Field
                                    name="city"
                                    type="text"
                                    component={TextInput}
                                    placeholder="City"
                                    title="City"
                                />
                                <Field
                                    name="state"
                                    type="text"
                                    component={TextInput}
                                    placeholder="State"
                                    title="State"
                                />
                                <Field
                                    name="addressLine1"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Address Line 1"
                                    title="Address Line 1"
                                />
                                <Field
                                    name="addressLine2"
                                    type="text"
                                    component={TextInput}
                                    placeholder="Address Line 2"
                                    title="Address Line 2"
                                />
                                <br />
                                <Label style={labelTitleStyle}>
                                    {"Phone Number"}
                                </Label>

                                <Field
                                    name="phoneCountryCode"
                                    component={PhoneCountryCode}
                                    options={this.state.phoneCountryCodes}
                                    placeholder="Country Code"
                                    title="Country Code"
                                />
                                <Field
                                    name="phoneNumber"
                                    type="number"
                                    component={TextInput}
                                    placeholder="Phone Number"
                                    title="Phone"
                                />
                            </MyColumn>
                        </MyRow>

                        <MyRow>
                            <MyColumn columnWidth={3} />
                            <MyColumn columnWidth={10}>
                                <Label style={labelTitleStyle}>
                                    {"Industry"}
                                </Label>
                                <br />
                                <Field
                                    name="industry"
                                    type="text"
                                    component={SelectInput}
                                    options={this.state.industries}
                                    placeholder="Industry"
                                    title="Industry"
                                />
                            </MyColumn>
                            <MyColumn columnWidth={3} />
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
                                        maxWidth: "400px",
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
                        {this.renderError(valid)}
                    </MyGrid>
                </Form>
            </Segment>
        );
    }
}

/*
<MyRow
    justifyContent="space-between"
    alignItems="flex-start"
>
    <Field
        name="birthdate_month"
        component={SelectInput}
        placeholder="Month"
        addContainerStyle={{ width: "60%" }}
    />
    <Field
        name="birthdate_day"
        component={TextInput}
        placeholder="Day"
        addContainerStyle={{ width: "15%" }}
    />
    <Field
        name="birthdate_year"
        component={TextInput}
        placeholder="Year"
        addContainerStyle={{ width: "25%" }}
    />
</MyRow>

<Field
    name="birthdate"
    type="text"
    component={DateInput3}
    // monthPlaceholder=""
    // dayPlaceholder=""
    // yearPlaceholder=""
/>

*/

FormEmployeeSignUp.defaultProps = {
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
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            birthdate: "",
            country: "",
            zipCode: "",
            city: "",
            state: "",
            addressLine1: "",
            addressLine2: "",
            phoneCountryCode: "",
            phoneNumber: "",
            industry: "",
            // isRegistrationComplete: false,
        },
        values:
            state.form && state.form.formEmployeeSignUp
                ? state.form.formEmployeeSignUp.values
                : null,
        reduxFormError: state.auth.reduxFormError,
        state: state,
        fuckingStateToPropsTest: "uranus",
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
)(reduxForm({ form: "formEmployeeSignUp", validate })(FormEmployeeSignUp));
