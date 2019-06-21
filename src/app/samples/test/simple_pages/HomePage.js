import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

const homestyle = {
    flex: 1,
    backgroundColor: "#ff7b4f",
    // width: "500px",
    // height: "100px",
    // justifyContent: "center",
    // alignItems: "center",
    color: "white",
};

const HomePage = () => {
    return (
        <div className="App" style={homestyle}>
            <h1>OBBERS</h1>
            <h4>Find the right job</h4>
            <Button>Sign Up</Button>
            <Button>Sign In</Button>
        </div>
    );
};

export default HomePage;
