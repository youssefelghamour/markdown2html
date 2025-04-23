import { Component } from "react";
import './Footer.css';
import headerLogo from "../../assets/logo.png";


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="footer-message">
                    <h2>Clean, fast, and live — Hope this tool saved you time and effort!</h2>
                </div>

                <div className="footer-container">
                    <img src={headerLogo} className="footer-logo" alt="Logo" />
                    <h1>Markdown2HTML</h1>
                    <h2>Instant Preview, Instant Conversion</h2>
                    <p>An interactive tool that shows you how your Markdown will look as you type.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;