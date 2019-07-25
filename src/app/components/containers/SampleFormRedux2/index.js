// @flow

/**
 * Documentation
 * SampleFormRedux
 *
 * This is a hard coded component, which means that it works specifically for
 * one specific form in our app. Making it smart means that it would now be
 * reusable all around our app, and would receive a configuration object as prop.
 * This config object would receive form settings like columns and rows, decide
 * if it should show a header and a footer, and options to decide if it should
 * only render a submit button, a cancel button, or other button, it should also
 * receive the callback functions or routes needed for this buttons to work.
 * The config object should also inclide a body where you find list of inputs and
 * per each input we should include validation rules, placeholder text, etc.
 *
 * Default Props
 * Has default props, so it works if no props are passed.
 *
 * Dimensions
 * Fixed width and height, but can be set to 100% width and height to fit its parent.
 *
 * MIN and MAX width & height
 * Defaults to none, not any min or max values set for width and height, but
 * they can accept that values if passed.
 *
 * Children
 * It accepts and renders children, if passed.
 *
 * Props Destructure
 * Right inside the function is the very first thing we do.
 *
 * Props for Styling
 * We add the styles object inside the function, in case we need to make use
 * props as style values.
 *
 * Override Styles
 * Component can accept a styles object and override the ones it has by default.
 *
 * Component Receives Parent Attrbutes {...props}
 * Parent can pass html or component attributes and this functional component
 * will apply those to itself.
 *
 * Can Talk to Parent
 * Component can talk to its parent.
 *
 * Parent Can Talk to Children
 * Component who renders this component can also talk to this functional component.
 *
 * Controlled Component
 * Some of its values can be controlled by state or other similar approaches.
 *
 * Multiple Styling Options Ready
 * It has folder structure ready to accept different ways of styling, such as
 * css, css3, css modules, sass, scss, inline, style objects and styled components.
 *
 * Multiple CSS Modules Ready
 * You can easily pass multiple css modules (local css classes).
 *
 * Lifecycle Methods:
 * https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
 *
 * REDUX FORM - READ MORE:
 * https://redux-form.com/7.4.2/docs/api/reduxform.md/
 *
 * UPDATE:
 * It should contain all types of inputs, date pickers, image, file, phone, langauge.
 *
 * Should ask for how many rows you want, and columns, but it should be able
 * to stack all of them
 *
 * OPTIONS:
 * Add Grid with Columns
 * Add Header Title and Subtitle
 * Add Body (Grid and Columns)
 * Add two set of inputs all of them under a TAB
 * Add Footer, notes and buttons (submit) or (cancel) or 3rd button...
 *
 * Validation Library: Revalidate
 * https://github.com/jfairbank/revalidate
 * https://github.com/jfairbank/revalidate/tree/master/docs
 *
 * form header - title - description
 * form background?
 * form borders? top right bottom left
 * form borderRadius - top right bottom left
 * input background
 * input borders?
 * input borderRadius
 * form footer: text paragraph
 * form footer buttons - submit button by default
 */

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

const validate = combineValidators({
    name: isRequired({ message: "Name is required" }),
    lastName: isRequired({ message: "Last Name is required" }),
    email: composeValidators(isRequired({ message: "Email is required" }))(),
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

class SampleFormRedux extends Component {
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

    // componentWillReceiveProps(nextProps) {}
    // Most Common Use Case: Acting on particular prop changes to trigger state transitions.
    // Can call setState: Yes.

    // Executes after the component is rendered for the first time
    // componentDidMount() {}
    // Most Common Use Case: Starting AJAX calls to load in data for your component.
    // Can call setState: Yes.

    // shouldComponentUpdate(nextProps, nextState) {}
    // Most Common Use Case: Controlling exactly when your component will re-render.
    // Can call setState: No.

    // componentWillUpdate() {}
    // Most Common Use Case: Used instead of componentWillReceiveProps on a
    // component that also has shouldComponentUpdate (but no access to previous props).
    // Can call setState: No.

    // componentDidUpdate() {}
    // Most Common Use Case: Updating the DOM in response to prop or state changes.
    // Can call setState: Yes.

    // componentWillUnmount() {}
    // Most Common Use Case: Cleaning up any leftover debris from your component.
    // Can call setState: No.

    // -------------------------------------------------------------------------
    // Form Config Object
    // -------------------------------------------------------------------------
    // {
    //   formHeader: {
    //     formTitle,
    //     formDescription,
    //   },
    //   formBody: [
    //     {
    //       useLabel: true, // true/false
    //       labelText: "Name",
    //       inputName: "name",
    //       placeholder: "Enter Name"
    //     },
    //   ],
    //   formFooter: {
    //     notes: "",
    //     buttons: [
    //       {
    //         text: "button",
    //         // onFormSubmit function
    //         cb: () => console.log("form footer button callback")
    //       },
    //     ]
    //   },
    // }
    // -------------------------------------------------------------------------

    handleOnSubmit = values => {
        console.log(values);
        // evt.preventDefault();
        // this.props.initialValues
        // this.props.callSomeActionFunctionThatTalksToServerOrSmthing(arg);
        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;

        // conditional action making and conditional route history push
        // if some value was found in the initialValues
        // if (this.props.initialValues.someVal) {
        // }
        // and inside the above if statement, push history conditionallly
        // decision based on some value
        // initialValues.id
        // ? () => history.push(`/someroute/${initialValues.id}`)
        // : () => history.push("/someroute")
        //
        // We can as well dispatch an action inside here or inside any condition
        // this.props.doSomeAction(actionArgument);
    };

    // Here in a ReduxForm we dont really care much about handling onInputChange
    // because now our input values are being handled by redux

    // evenet (e) not destructured
    // handleOnInputChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // // evenet (e) destructured
    // handleOnInputChange = ({ target: { name, value } }) => {
    //     this.setState({ [name]: value });
    // };
    //
    //

    render() {
        const {
            autoComplete,
            backgroundColor,
            overrideContainerStyle,
            overrideFormStyle,
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
            borderColor: "rgba(255, 255, 255, 0.85)",
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
            let addStyle = { borderColor: "#ff3f34" };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // Form has been touched and has valid input values
        if (anyTouched === true && valid) {
            // let addStyle = { borderLeftColor: "#26de81" };
            let addStyle = { borderColor: "#26de81" };
            containerStyle = { ...containerStyle, ...addStyle };
        }
        // Form is being sumbitted
        if (submitting) {
            // let addStyle = { borderLeftColor: "#55E6C1" };
            let addStyle = { borderColor: "#55E6C1" };
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
                style={{ ...containerStyle, ...overrideContainerStyle }}
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                <Form
                    style={{ ...formStyle, ...overrideFormStyle }}
                    onSubmit={this.props.handleSubmit(this.handleOnSubmit)}
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
                                    type="text"
                                    component={TextInput}
                                    placeholder="Password"
                                />
                                <Field
                                    name="confirmPassword"
                                    type="text"
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
                                    name="state"
                                    type="text"
                                    component={TextInput}
                                    placeholder="State"
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

/*

<Field
    name="notes"
    type="text"
    rows={3}
    component={TextArea}
    placeholder="Notes"
/>
<Field
    name="date"
    type="text"
    component={DateInput}
    placeholder="Select Date"
/>
<Field
    name="category"
    type="text"
    component={SelectInput}
    options={this.state.testCategories}
    placeholder="Select Option"
/>
<Field
    name="categories"
    type="text"
    component={SelectInput}
    options={this.state.testCategories}
    multiple
    placeholder="Select Option"
/>
<Field
    name="date"
    type="text"
    component={DateInput}
    placeholder="Select Date"
/>
<br />



<br />
<br />
<Button
    onClick={
        this.props.initialValues.name
            ? () =>
                  this.props.history.push(
                      `/somepath/${
                          this.props
                              .initialValues
                              .name
                      }`
                  )
            : () =>
                  this.props.history.push(
                      "/somePath"
                  )
    }
    type="button"
    style={{
        width: "100%",
        height: "60px",
        borderRadius: "50px",
        backgroundColor: "red",
        fontSize: "20px",
        fontWeight: "bold",
    }}
>
    CANCEL
</Button>
*/

SampleFormRedux.defaultProps = {
    autoComplete: "off", // or use "on"
    backgroundColor: "rgba(255, 255, 255, 0.30)",
    overrideContainerStyle: {},
    overrideFormStyle: {},
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
)(reduxForm({ form: "employerSignUpForm", validate })(SampleFormRedux));
