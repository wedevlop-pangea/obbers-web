import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

import BackgroundVideo from "./components/presentation/unique/BackgroundVideo";

import mp4Video from "./assets/video/house-clouds-time-lapse.mp4";
import webmVideo from "./assets/video/house-clouds-time-lapse.webm";
import bgImg from "./assets/image/thumb.png";

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
        <div className="" style={homestyle}>
            <BackgroundVideo
                mp4Video={mp4Video}
                webmVideo={webmVideo}
                bgImg={bgImg}
                coverColor="pink"
            >
                <div className="App" style={homestyle}>
                    <h1>OBBERS</h1>
                    <h4>Find the right job</h4>
                    <h6>Testing Background Video</h6>
                    <Button>Sign Up</Button>
                    <Button>Sign In</Button>
                </div>
            </BackgroundVideo>
        </div>
    );
};

export default HomePage;
