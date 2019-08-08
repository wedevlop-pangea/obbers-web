// @flow

/**
 * Documentation
 * BirthMonth
 *
 * Render Label ? BOOL
 * Label Position, top, right, bottom, left
 * Label Text Align, left center right
 *
 * placeholder Text Align, left, center, right
 * placeholder Text css customize, color, font, size, etc.
 *
 */

import React, { Component, Fragment } from "react";
import { Form, Label, Select } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const months = [
    { key: "january", text: "January", value: "01" },
    { key: "february", text: "February", value: "02" },
    { key: "march", text: "March", value: "03" },
    { key: "april", text: "April", value: "04" },
    { key: "may", text: "May", value: "05" },
    { key: "june", text: "June", value: "06" },
    { key: "july", text: "July", value: "07" },
    { key: "august", text: "August", value: "08" },
    { key: "september", text: "September", value: "09" },
    { key: "october", text: "October", value: "10" },
    { key: "november", text: "November", value: "11" },
    { key: "december", text: "December", value: "12" },
];

// const BirthMonth = props => {
class BirthMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: "",
            day: "",
            year: "",
        };
    }

    getDate = () => {
        if (
            this.state.month !== "" &&
            this.state.day !== "" &&
            this.state.year !== ""
        ) {
            return `${this.state.month}/${this.state.day}/${this.state.year}`;
        } else {
            return "";
        }
    };

    handleOnSelectChange = data => {
        let selectName = data.name;
        let selectValue = data.value;

        console.log("handleOnSelectChange");
        console.log("selectName");
        console.log(selectName);
        console.log("selectValue");
        console.log(selectValue);

        this.setState({ month: selectValue });

        this.setState({ [selectName]: selectValue });
    };

    handleOnInputChange = e => {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        console.log("inputName");
        console.log(inputName);
        console.log("inputValue");
        console.log(inputValue);

        // if (inputName === "day" && inputValue < 1) return;
        // if (inputName === "day" && inputValue > 31) return;
        // if (inputName === "year" && inputValue < 1900) return;
        // if (inputName === "year" && inputValue > 2010) return;

        if (inputName === "day") {
            console.log("DAY changed");
            this.setState({ day: inputValue });
        }

        if (inputName === "year") {
            console.log("YEAR changed");
            this.setState({ year: inputValue });
        }

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        console.log("this.state.date");
        console.log(`${this.state.month}/${this.state.day}/${this.state.year}`);

        const {
            input,
            width,
            type,
            monthPlaceholder,
            options,
            multiple,
            dayPlaceholder,
            yearPlaceholder,
            meta: { touched, error },
            backgroundColor,
            addContainerStyle,
            addInputStyle,
            children,
        } = this.props;

        const containerStyle = {
            // backgroundColor: backgroundColor,
            // //
            // // width: "100px",
            // borderStyle: "none",
            // // border: "20px",
            // // display: "flex",
            // // flexDirection: "row",
            // // justifyContent: "center",
            // //
            // borderColor: "green",
            // borderWidth: "2px",
            // borderStyle: "solid",
            // borderRadius: "0px",
            //
            // boxSizing: "borderBox",
        };

        const inputStyle = {
            backgroundColor: backgroundColor,
            // backgroundColor: "green",

            // color: "#3A4040",
            // placeholderTextColor: "red",
            // borderColor: "rgba(255, 255, 255, 0.750)",
            borderTopColor: "rgba(255, 255, 255, 0.0)",
            borderRightColor: "rgba(255, 255, 255, 0.0)",
            // // borderBottomColor: "rgba(255, 255, 255, 0.0)",
            borderLeftColor: "rgba(255, 255, 255, 0.0)",
            // borderWidth: "2px",
            // borderStyle: "solid",
            // borderRadius: "0px",
            // // borderTopRadius
            // // borderTopLeftRadius
            //
            // // borderTop: "0px",
            // // borderRight: "0px",
            // // borderLeft: "0px",
            //
            // height: "20px !important",
            // width: "100px !important",
            fontSize: "18px",
            fontWeight: "bold",
            //
            borderBottomColor: "rgba(255, 255, 255, 0.750)",
            borderWidth: "2px",
            borderStyle: "solid",
            // borderRadius: "0px",
            //
            // maxWidth: "10px !important",
        };

        const labelStyle = {
            // marginTop: "3px",
            // width: "100%",
            // height: "25px",
            // // borderBottomLeftRadius: "50px",
            // borderBottomRightRadius: "50px",
            // // borderTopLeftRadius: "50px",
            // // borderTopRightRadius: "50px",
            // backgroundColor: "#e74c3c", // #1 red opaque
            // // backgroundColor: "#F44336", // #1 red bright minimal
            // // backgroundColor: "#FF5722", // #2
            // // backgroundColor: "#B71C1C", // #1 red dark strong
            // // backgroundColor: "#F57F17",
            // // backgroundColor: "#BF360C",
            // // backgroundColor: "#EF5350",
            // // backgroundColor: "#FF7043",
            // color: "white",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // fontSize: "12px",
        };

        return (
            <Form.Field
                {...this.props}
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <Select
                        name="month"
                        style={{ ...inputStyle, ...addInputStyle }}
                        // value={input.value || null}
                        value={this.state.month}
                        // onChange={(e, data) => input.onChange(data.value)}
                        // onChange={(e, data) => console.log(data)}
                        // onChange={(e, data) => this.setState({ [data.name]: data.value }) }
                        onChange={(e, data) => this.handleOnSelectChange(data)}
                        placeholder={monthPlaceholder}
                        options={options}
                        multiple={multiple}
                        // className={[cssModules.container]}
                        // CSS Modules, join 2 classes
                        // className={[cssModules.classA, cssModules.classB].join(" ")}
                        //
                        // className="container"
                        // Vanilla CSS, join 2 classes
                        // className="container classA classB"
                    >
                        {children}
                    </Select>
                </div>
                {touched && error && (
                    <Label style={labelStyle} color="#e74c3c">
                        {error}
                    </Label>
                )}
            </Form.Field>
        );
    }
}

BirthMonth.defaultProps = {
    monthPlaceholder: "Month",
    options: months,
    multiple: false,
    dayPlaceholder: "Day",
    yearPlaceholder: "Year",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    addContainerStyle: {},
    addInputStyle: {},
};

export default BirthMonth;
