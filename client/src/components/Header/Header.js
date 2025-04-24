import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import headerLogo from "../../assets/logo.png";


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


const styles = StyleSheet.create({
    appHeader: {
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        color: '#302f46',
        width: '100%',
        backgroundColor: 'white',
        padding: '2% 3%',
        justifyContent: 'space-between',
    },
  
    headerLogoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
  
    appHeaderTitle: {
        fontFamily: '"Special Gothic Expanded One", sans-serif',
        fontSize: 18,
        marginLeft: 10,
    },
  
    headerLogo: {
        height: 40,
        filter: 'contrast(1.5)',
    },
  
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
  
    navLink: {
        textDecoration: 'none',
        color: '#302f46',
        fontSize: 17,
        margin: '0 12px',
        transition: 'transform 0.3s ease',
        fontWeight: 'bold',

        ':hover': {
            transform: 'scale(1.1)',
        },
    },
});

export default Header;