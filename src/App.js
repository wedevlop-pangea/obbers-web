import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";

import HomePage from "./samples/test/simple_pages/HomePage";
import ShopPage from "./samples/test/simple_pages/ShopPage";
import AdminPage from "./samples/test/simple_pages/AdminPage";
import EmployeePage from "./samples/test/simple_pages/EmployeePage";
import EmployerPage from "./samples/test/simple_pages/EmployerPage";

import HomeModule from "./modules/Home";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={HomeModule} />
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
