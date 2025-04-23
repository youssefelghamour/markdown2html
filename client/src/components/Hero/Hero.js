import React, { Component } from "react";
import "./Hero.css";


class Hero extends Component {
    render() {
        return (
            <div className="Hero-section">
                <h1>Markdown2HTML</h1>
                <h2>Instant Preview, Instant Conversion</h2>
                <p>An interactive tool that shows you how your Markdown will look as you type.</p>
            </div>
        );
    }
}

export default Hero;