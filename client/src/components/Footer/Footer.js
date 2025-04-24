import { Component } from "react";
import './Footer.css';
import headerLogo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="footer-message">
                    <h2>Clean, fast, and live — Hope this tool saved you time and effort!</h2>
                </div>

                <div className="footer-container">
                    <div className="footer-logo-container">
                        <div className="footer-logo-text">
                            <img src={headerLogo} className="footer-logo" alt="Logo" />
                            <h3>Markdown2HTML</h3>
                        </div>
                        <h4>Instant Preview, Instant Conversion</h4>
                        <p>An interactive tool that shows you how your Markdown will look as you type.</p>
                    </div>

                    <nav className="footer-nav">
                        <a href="https://github.com/youssefelghamour/markdown2html">Features</a>
                        <a href="https://github.com/youssefelghamour/markdown2html">How to Use</a>
                        <a href="https://github.com/youssefelghamour/markdown2html">About</a>
                        <a href="https://github.com/youssefelghamour/markdown2html">GitHub Repo</a>
                    </nav>
                    
                    <div className="footer-socials">
                        <FaSquareXTwitter />
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaLinkedin />

                        <p style={{ fontSize: '12px' }}><b>Copyright</b> &copy; Youssef El Ghamour 2025</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;