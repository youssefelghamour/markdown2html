import React, { Component } from "react";
import { css } from 'aphrodite';
import headerLogo from "../../assets/logo.png";
import styles from "./HeaderStyles";


class Header extends Component {
    render() {
        return (
            <header className={css(styles.appHeader)}>
                <div className={css(styles.headerLogoContainer)}>
                <img src={headerLogo} alt="Logo" className={css(styles.headerLogo)} />
                <h2 className={css(styles.appHeaderTitle)}>Markdown2HTML</h2>
                </div>
    
                <nav className={css(styles.nav)}>
                    <a className={css(styles.navLink)} href="https://github.com/youssefelghamour/markdown2html">Features</a>
                    <a className={css(styles.navLink)} href="https://github.com/youssefelghamour/markdown2html">How to Use</a>
                    <a className={css(styles.navLink)} href="https://github.com/youssefelghamour/markdown2html">About</a>
                    <a className={css(styles.navLink)} href="https://github.com/youssefelghamour/markdown2html">GitHub Repo</a>
                </nav>
            </header>
        );
    }
}


export default Header;