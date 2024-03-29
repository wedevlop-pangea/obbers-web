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

import SignIn from "./modules/Auth/SignIn";
import SignUpEmployer from "./modules/Auth/SignUpEmployer";
import SignUpEmployee from "./modules/Auth/SignUpEmployee";

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

                            <Route path="/auth" component={AuthModule} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={AuthModule} />
                            <Route
                                exact
                                path="/employer"
                                component={AuthModule}
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
                                component={AuthModule}
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
