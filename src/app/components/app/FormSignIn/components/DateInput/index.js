// @flow

/**
 * Documentation
 * DateInput
 *
 * See more about DatePicker configuration here.
 * You can set more properties like Date and Time Picker.
 * https://reactdatepicker.com/
 *
 */

import React, { Component, Fragment } from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // custom styles for datepicker

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const DateInput = props => {
    const {
        input,
        width,
        placeholder,
        meta: { touched, error },
        timePicker, // timePicker? if true, show a time picker as well ...,
        backgroundColor,
        addContainerStyle,
        addInputStyle,
        children,
        ...rest
    } = props;

    const containerStyle = {
        backgroundColor: backgroundColor,
        //
        width: "100%",
        borderStyle: "none",
        border: "20px",
    };
    const inputStyle = {
        backgroundColor: backgroundColor,
        //
        borderStyle: "solid",
        borderTop: "2px",
        borderRight: "2px",
        borderLeft: "2px",
        height: "20px !important",
    };

    return (
        <Form.Field
            {...props}
            style={{ ...containerStyle, ...addContainerStyle }}
            error={touched && !!error}
            // className={[cssModules.container]}
            // CSS Modules, join 2 classes
            // className={[cssModules.classA, cssModules.classB].join(" ")}
            //
            // className="container"
            // Vanilla CSS, join 2 classes
            // className="container classA classB"
        >
            <DatePicker
                {...rest}
                style={{ ...inputStyle, ...addInputStyle }}
                placeholderText={placeholder}
                selected={input.value ? new Date(input.value) : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                //
                // Pass below properties for adding TimePicker to the DatePicker`
                //
                // showTimeSelect
                // timeFormat="HH:mm"
                // timeIntervals={15}
                // dateFormat="MMMM d, yyyy h:mm aa"
                // timeCaption="time"
                //
                // className={[cssModules.container]}
                // CSS Modules, join 2 classes
                // className={[cssModules.classA, cssModules.classB].join(" ")}
                //
                // className="container"
                // Vanilla CSS, join 2 classes
                // className="container classA classB"
            >
                {children}
            </DatePicker>
            {touched && error && (
                <Label basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

DateInput.defaultProps = {
    placeholder: "Enter Text",
    timePicker: false,
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    addContainerStyle: {},
    addInputStyle: {},
};

export default DateInput;
