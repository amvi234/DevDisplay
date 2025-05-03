import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload, FiPhone, FiMail, FiYoutube } from "react-icons/fi";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <span>
                    <a href="tel:+919534456949" className="footer__link">
                        <FiPhone size={18} className="footer__icon" />
                        +919534456949
                    </a>
                </span>
                <span>
                    <a href="mailto:amitvikram2341@gmail.com" className="footer__link">
                        <FiMail size={18} className="footer__icon" />
                        amitvikram2341@gmail.com
                    </a>
                </span>
            </div>
            <div className="footer__middle">
                <a
                    href="https://drive.google.com/file/d/1gpwulXTmlZ4GE5oz8qYl7KQprTCdYsGV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    <FiDownload size={18} className="footer__icon" />
                    Download Resume
                </a>
            </div>
            <div className="footer__right">
                <a
                    href="https://www.youtube.com/@thejavascriptworkmate8533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    title="YouTube"
                >
                    <FiYoutube size={24} className="footer__social-icon" />  
                </a>
                <a
                    href="https://github.com/amvi234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    title="GitHub"
                >
                    <FaGithub size={24} className="footer__social-icon" />
                </a>
                <a
                    href="https://linkedin.com/in/amvi234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    title="LinkedIn"
                >
                    <FaLinkedin size={24} className="footer__social-icon" />
                </a>
                <a
                    href="https://www.hackerrank.com/amvi234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    title="HackerRank"
                >
                    <FaHackerrank size={24} className="footer__social-icon" />
                </a>
                <a
                    href="https://leetcode.com/amvi234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    title="LeetCode"
                >
                    <SiLeetcode size={24} className="footer__social-icon" />
                </a>
            </div>
        </div>
    );
}