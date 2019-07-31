import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";

import HomePage from "./app/samples/test/simple_pages/HomePage";
import ShopPage from "./app/samples/test/simple_pages/ShopPage";
import AdminPage from "./app/samples/test/simple_pages/AdminPage";
import EmployeePage from "./app/samples/test/simple_pages/EmployeePage";
import EmployerPage from "./app/samples/test/simple_pages/EmployerPage";

// Root Component - App's Starting Point
// import HomeModule from "./modules/Home";

// Import Test Component(s)
import HomeModule from "./modules/Home";
import AuthModule from "./modules/Auth";

import EmployeeModule from "./modules/Employee";
import EmployerModule from "./modules/Employer";

import SignIn from "./modules/Auth/SignIn";
import SignUpEmployer from "./modules/Auth/SignUpEmployer";
import SignUpEmployee from "./modules/Auth/SignUpEmployee";
import PasswordReset from "./modules/Auth/PasswordReset";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={HomeModule} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <Fragment>
                            <Route path="/shop" component={ShopPage} />
                            <Route path="/admin" component={AdminPage} />
                            <Route
                                path="/accounts/password/reset/"
                                component={PasswordReset}
                            />
                            <Route path="/signin" component={SignIn} />
                            <Route
                                exact
                                path="/employer"
                                component={EmployerModule}
                            />
                            <Route
                                path="/(.+)"
                                render={() => (
                                    <Fragment>
                                        <Route
                                            exact
                                            path="/employer/signup"
                                            component={SignUpEmployer}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route
                                exact
                                path="/employee"
                                component={EmployeeModule}
                            />
                            <Route
                                path="/(.+)"
                                render={() => (
                                    <Fragment>
                                        <Route
                                            exact
                                            path="/employee/signup"
                                            component={SignUpEmployee}
                                        />
                                    </Fragment>
                                )}
                            />
                        </Fragment>
                    )}
                />
            </Fragment>
        );
    }
}

export default App;
