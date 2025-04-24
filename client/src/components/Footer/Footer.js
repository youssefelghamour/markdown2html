import { Component } from "react";
import headerLogo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { css } from 'aphrodite';
import styles from './FooterStyles';


class Footer extends Component {
    render() {
        return (
            <footer className={css(styles.appFooter)}>
                <div className={css(styles.footerMessage)}>
                    <h2>Clean, fast, and live — Hope this tool saved you time and effort!</h2>
                </div>

                <div className={css(styles.footerContainer)}>
                    <div className={css(styles.footerLogoContainer)}>
                        <div className={css(styles.footerLogoText)}>
                            <img src={headerLogo} className={css(styles.footerLogo)} alt="Logo" />
                            <h3 className={css(styles.footerLogoTextH3)}>Markdown2HTML</h3>
                        </div>
                        <h4 className={css(styles.footerLogoH4)}>Instant Preview, Instant Conversion</h4>
                        <p className={css(styles.footerLogoP)}>An interactive tool that shows you how your Markdown will look as you type.</p>
                    </div>

                    <nav className={css(styles.footerNav)}>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">Features</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">How to Use</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">About</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">GitHub Repo</a>
                    </nav>
                    
                    <div className={css(styles.footerSocials)}>
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