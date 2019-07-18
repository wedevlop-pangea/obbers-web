// @flow

/**
 * Documentation
 * SampleFormRedux
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
 */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { Segment, Header, Form, Button } from "semantic-ui-react";

import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import SelectInput from "./components/SelectInput";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

class SampleFormRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            testCategories: [
                { key: "drinks", text: "Drinks", value: "drinks" },
                { key: "culture", text: "Culture", value: "culture" },
                { key: "film", text: "Film", value: "film" },
                { key: "food", text: "Food", value: "food" },
                { key: "music", text: "Music", value: "music" },
                { key: "travel", text: "Travel", value: "travel" },
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
        // this.props.initialValues
        // this.props.callSomeActionFunctionThatTalksToServerOrSmthing(arg);
        // this.props.history.push(`/someroute/${someparam}`);
        // this.props.history.goBack;

        // decision based on some value
        // initialValues.id
        // ? () => history.push(`/someroute/${initialValues.id}`)
        // : () => history.push("/someroute")
    };

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

    render() {
        const {
            autoComplete,
            backgroundColor,
            overrideStyle,
            children,
        } = this.props;
        const { name, lastName } = this.state;

        const containerStyle = {
            backgroundColor: backgroundColor,
        };

        return (
            <Segment
                // {...this.props}
                style={{ ...containerStyle, ...overrideStyle }}
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                <Segment>
                    <Header sub color="teal" content="Register" />
                    <Header
                        color="teal"
                        content="Complete registration and start hiring the right people today!"
                    />
                </Segment>
                <Form
                    onSubmit={this.props.handleSubmit(this.handleOnSubmit)}
                    autoComplete={autoComplete}
                >
                    <Field
                        name="name"
                        type="text"
                        component={TextInput}
                        placeholder="Name"
                    />
                    <Field
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
                        name="zipCode"
                        type="text"
                        component={TextInput}
                        placeholder="Zip Code"
                    />
                    <Field
                        name="phone"
                        type="text"
                        component={TextInput}
                        placeholder="Phone"
                    />
                    <Field
                        name="notes"
                        type="text"
                        rows={3}
                        component={TextArea}
                        placeholder="Notes"
                    />
                    <Field
                        name="category"
                        type="text"
                        component={SelectInput}
                        options={this.state.testCategories}
                        placeholder="Select Option"
                    />
                    <Field
                        name="category"
                        type="text"
                        component={SelectInput}
                        options={this.state.testCategories}
                        multiple
                        placeholder="Select Option"
                    />
                    <Button
                        positive
                        type="submit"
                        style={{
                            width: "100%",
                            height: "30px",
                            borderRadius: "20px",
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            </Segment>
        );
    }
}

SampleFormRedux.defaultProps = {
    autoComplete: "off", // or use "on"
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    overrideStyle: {},
};

// const mapStateToProps = state => {
const mapStateToProps = (state, ownProps) => {
    return {
        // testProp: state.testProp
        initialValues: {
            name: "test name",
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
    mapStateToProps, // mapState
    mapDispatchToProps // actions
)(reduxForm({ form: "employerSignUpForm" })(SampleFormRedux));
