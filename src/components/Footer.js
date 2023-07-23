import "./Footer.css";

const Footer = ()=>{
    return(
        <>
            <div className="footer-container">
                <div className="items">
                <div className="contact-no">
                    <p>Questions? Call <a href="#">000-800-919-1694</a></p>
                </div>
                <div className="services">
                    <div className="col-1">
                        <a href="#">FAQ</a>
                        <a href="#">Invester Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div className="col-2">
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookies Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="col-3">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                    </div>
                    <div className="col-4">
                        <a href="#">Media Center</a>
                        <a href="#">Term of Use</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="btn">
                    <select className='dropdown'>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div className="bottom-para">
                    <p>Netflix India</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer;