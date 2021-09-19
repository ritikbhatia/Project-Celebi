import React from "react";
import Background from './landing_bg.jpg'
import './Landing.css'
import ParticlesBg from 'particles-bg'
import Typical from 'react-typical'
import Snow from 'react-snow-effect';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";

// function Button() {
//     return <AwesomeButton type="primary">Button</AwesomeButton>;
// }



let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 8],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: { x: 1, y: 1, width: 100, height: 100 }, // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: null,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};

function Landing() {
    return (
        <div class="demo-wrap">
            <img
                class="demo-bg"
                src="https://wallpapercave.com/wp/wp6721067.jpg"
                alt=""
            />
            <div class="demo-content">
                <h1 className="title">Project Celebi</h1>
                <h3 className="subheading">Sustainable communities for a resilient future</h3>
                <Link to="/login"><AwesomeButton size="large" type="primary">Login</AwesomeButton></Link>
                {/* <LandingScreen /> */}
            </div>
            {/* <ParticlesBg type="custom" config={config} bg={true} /> */}
        </div>

    );
}

export default Landing;