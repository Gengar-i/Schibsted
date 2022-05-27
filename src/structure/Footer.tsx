import React from "react";
import "../styles/footer.scss"

const Footer: React.FC = () => (
    <footer>
        <div className="cookie">
            <a rel="noreferrer" target="_blank" href="https://schibsted.com/cookie-policy/">Cookies</a>
            <a rel="noreferrer" target="_blank" href="https://schibsted.com/cookie-policy/">Legal</a>
        </div>
        <div id="media-links">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/SchibstedGroup/">
                <img src="https://schibsted.com/wp-content/themes/scom/assets/img/fb.png" alt="facebook" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/schibsted/">
                <img src="https://schibsted.com/wp-content/themes/scom/assets/img/insta.png" alt="instagram" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/schibstedgroup">
                <img src="https://schibsted.com/wp-content/themes/scom/assets/img/tw.png" alt="twitter" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/schibsted-asa">
                <img src="https://schibsted.com/wp-content/themes/scom/assets/img/linkedin.png" alt="linkedin" />
            </a>
        </div>
        <div id="company-things">Rethinking things since 1839</div>
    </footer>
);

export default Footer;