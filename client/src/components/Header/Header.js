import React, { Component } from "react";
import "./Header.css";
import headerLogo from "../../assets/logo.png";


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className='header-logo-container'>
                <img src={headerLogo} alt="Logo" className="header-logo" />
                <h2>Markdown2HTML</h2>
                </div>
    
                <nav>
                <a href="https://github.com/youssefelghamour/markdown2html">Features</a>
                <a href="https://github.com/youssefelghamour/markdown2html">How to Use</a>
                <a href="https://github.com/youssefelghamour/markdown2html">About</a>
                <a href="https://github.com/youssefelghamour/markdown2html">GitHub Repo</a>
                </nav>
            </header>
        );
    }
}

export default Header;