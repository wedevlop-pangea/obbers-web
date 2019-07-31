// @flow

/**
 * Documentation
 * DateInput
 *
 * See more about DatePicker configuration here.
 * You can set more properties like Date and Time Picker.
 * https://reactdatepicker.com/
 *
 * using date-fns npm package
 * https://date-fns.org/v2.0.0-alpha.27/docs/format
 *
 */

import React, { Component, Fragment } from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // custom styles for datepicker

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
        // ...rest
    } = props;

    // const containerStyle = {
    //     backgroundColor: backgroundColor,
    //     //
    //     width: "100%",
    //     borderStyle: "none",
    //     border: "20px",
    // };
    // const inputStyle = {
    //     backgroundColor: backgroundColor,
    //     //
    //     borderStyle: "solid",
    //     borderTop: "2px",
    //     borderRight: "2px",
    //     borderLeft: "2px",
    //     height: "20px !important",
    // };

    const containerStyle = {
        backgroundColor: backgroundColor,
        //
        // width: "200%",
        borderStyle: "none",
        // border: "20px",
        justifyContent: "center",
    };
    const inputStyle = {
        // backgroundColor: backgroundColor,
        backgroundColor: "red !important",
        //
        color: "#3A4040",
        placeholderTextColor: "red",
        borderColor: "rgba(255, 255, 255, 0.750)",
        // borderTopColor: "rgba(255, 255, 255, 0.0)",
        // borderRightColor: "rgba(255, 255, 255, 0.0)",
        // borderBottomColor: "rgba(255, 255, 255, 0.0)",
        // borderLeftColor: "rgba(255, 255, 255, 0.0)",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "0px",
        // borderTopRadius
        // borderTopLeftRadius
        borderTop: "0px",
        borderRight: "0px",
        borderLeft: "0px",
        height: "20px !important",
        // width: "250px",
        width: "100% !important",
        fontSize: "20px",
        fontWeight: "bold",
    };
    const labelStyle = {
        marginTop: "3px",
        width: "100%",
        height: "25px",
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

    return (
        <Form.Field
            // {...props}
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
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => {}}
                // {...rest}
                style={{ ...inputStyle, ...addInputStyle }}
                placeholderText={placeholder}
                selected={input.value ? new Date(input.value) : null}
                // selected={input.value ? new Date(input.value) : new Date(1980, 0, 1)}
                // selected={input.value ? new Date(input.value) : new Date("1980-1-1")}
                onChange={input.onChange}
                onBlur={input.onBlur}
                //

                //
                // Pass below properties for adding TimePicker to the DatePicker`
                //
                // showTimeSelect
                // timeFormat="HH:mm"
                // timeIntervals={15}
                // dateFormat="MMMM d, YYYY h:mm aa"
                // timeCaption="time"
                //
                className={[cssModules.container]}
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
                <Label style={labelStyle} color="red">
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
