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
import HomeModule from "./modules/Home";

// Import Test Component(s)
import TestComponent from "./modules/Home";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={TestComponent} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <Fragment>
                            <Container className="main">
                                <Route path="/shop" component={ShopPage} />
                                <Route path="/admin" component={AdminPage} />
                                <Route
                                    path="/employee"
                                    component={EmployeePage}
                                />
                                <Route
                                    path="/employer"
                                    component={EmployerPage}
                                />
                            </Container>
                        </Fragment>
                    )}
                />
            </Fragment>
        );
    }
}

export default App;
