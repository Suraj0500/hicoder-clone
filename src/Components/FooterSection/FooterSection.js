import React from "react";
import "./FooterSection.css";

function FooterSection(){
    return(
        <div className="container-footer">
            <div className="footer-first-container">
                <div className="first-div-footer">
                    <img src="/images/logo-dark.png" alt="logo" />
                    <p>HiCoder enables students in being capable to develop production grade application by availing full stack     development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
                    <button className="btn btn-lg btn-footer">APPLY NOW</button>
                </div>
                <div className="second-div-footer">
                 <h3>Info</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="third-div-footer">
                    <h3>Contact</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</li>
                        <li><i className="fas fa-phone-volume"></i><a href="/">(+91) 9206 980 980</a></li>
                        <li><i className="fas fa-envelope"></i><a href="/">admission@hicoder.in</a></li>
                        <li><i className="fas fa-clock"></i>10:00AM - 06:00PM</li>
                    </ul>
                </div>
            </div>
            <div className="footer-second-container">
                <div>
                    <p className="copyright-text">© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
                    <p><a href="/" style={{textDecoration:"none"}}>Privacy Policy</a> | <a href="/" style={{textDecoration:"none"}}>Terms of Service</a> | * Registration Charges Applied</p>
                </div>
                <div className="socials-container">
                    <p><i style={{color:"#1c3988"}} className="fab fa-facebook-square fa-2x"></i></p>
                    <p><i style={{color:"#1c3988"}} className="fab fa-instagram-square fa-2x"></i></p>
                    <p><i style={{color:"#1c3988"}} className="fab fa-twitter-square fa-2x"></i></p>
                    <p><i style={{color:"#1c3988"}} className="fab fa-linkedin fa-2x"></i></p>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;