import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer_box">
                <div className="footer_flex_container">
                    <div className="footer-social-handles">
                        <div className="footer_title">FOLLOW US</div>
                        <div className="footer_contact_details">
                            <div className="footer_title">CONTACT US</div>
                            <div>
                                <div>
                                    <span></span>
                                    <span className="contact_style">
                                        <Link to="tel:+91-7969 0021 11" >+91-7969 0021 11</Link>
                                    </span>
                                </div>
                                <div className="alignContactEmail">
                                    <span></span>
                                    <span className="contact_style email">
                                        <Link to="mailto:support@prepbytes.com" >support@prepbytes.com</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_articles">
                        <div className="footer_title">LATEST ARTICLES
                            <ul type="none" className="latestArticlesItems top-margin">
                                <Link to="https://www.prepbytes.com/blog/html/html-br-tag/" className="latestArticlesItems" target="_blank"><li>HTML br Tag</li></Link>
                                <Link to="https://www.prepbytes.com/blog/html/html-frame-tag/" className="latestArticlesItems" target="_blank"><li>HTML frame Tag</li></Link>
                                <Link to="https://www.prepbytes.com/blog/html/html-marquee-tag/" className="latestArticlesItems" target="_blank"><li>HTML Marquee Tag</li></Link>
                                <Link to="https://www.prepbytes.com/blog/html/html-span-tag/" className="latestArticlesItems" target="_blank"><li>HTML span tag</li></Link>
                                <Link to="https://www.prepbytes.com/blog/html/html-blink-tag/" className="latestArticlesItems" target="_blank"><li>HTML Blink Tag</li></Link>
                            </ul>
                        </div>
                        <div className="footer_title">POPULAR ARTICLES
                            <ul type="none" className="latestArticlesItems top-margin">
                                <Link to="https://www.prepbytes.com/blog/?p=18466" className="latestArticlesItems" target="_blank"><li>Touch Command in Linux with Examples</li></Link>
                                <Link to="https://www.prepbytes.com/blog/?p=18430" className="latestArticlesItems" target="_blank"><li>screen Command in Linux with Examples</li></Link>
                                <Link to="https://www.prepbytes.com/blog/?p=18434" className="latestArticlesItems" target="_blank"><li>nohup Command in Linux with Examples</li></Link>
                                <Link to="https://www.prepbytes.com/blog/?p=18412" className="latestArticlesItems" target="_blank"><li>sort command linuxunix examples</li></Link>
                                <Link to="https://www.prepbytes.com/blog/?p=18410" className="latestArticlesItems" target="_blank"><li>wc command linux examples</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_margin">
                        <div className="footer_title quick-link-title">QUICK LINKS</div>
                        <Link className="footer_links" href="/interview-questions">Interview Notes</Link>
                        <Link className="footer_links" href="/mock-tests">Mock Tests</Link>
                        <Link className="footer_links" href="/placement-preparation-program">Placement Programs</Link>
                        <Link className="footer_links" href="/prepbytes-courses">Coding Courses</Link>
                        <Link className="footer_links" href="/about">About Us</Link>
                        <Link className="footer_links" href="/blog">Blog</Link>
                    </div>
                </div>
                <hr className="footer_line"/>
                    <div className="footer_policy_rights">
                        <div>Copyright©2023</div>
                        <div className="Policy">
                            <Link to="/privacypolicy">Privacy Policy</Link>
                            <Link to="/refundpolicy">Refund Policy</Link>
                            <Link to="/terms-and-conditions">Terms of Use</Link>
                        </div>
                    </div>
            </div>

        </>
    );
};

export default Footer;
