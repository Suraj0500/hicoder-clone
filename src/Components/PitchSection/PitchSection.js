import React from "react";
import "./PitchSection.css";

function Pitch(){
    return(
        <div className="custom-container">
            <div className="pitch-content-box">
                <img className="left-img" src="/images/pitch-left-img.jpg" alt="left"></img>
                <div className="pitch-content-text-right">
                    <h2>HICODER</h2>
                    <h1>We help students learn <span style={{color:"#1c3988"}}>Full Stack Development.</span></h1>
                    <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                </div>
            </div>
            <div className="pitch-content-box">
                <img className="right-img" src="/images/pitch-right-img.jpg" alt="left"></img>
                <div className="pitch-content-text-left">
                    <h1>Trained on the most in-demand Technology Skills</h1>
                    <p>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>
                    <ul>
                        <li><i className="fas fa-check-circle" style={{color: "#106eea"}}></i>End to End Project Analysis, Design & Development</li>
                        <li><i className="fas fa-check-circle" style={{color: "#106eea"}}></i>Authentication, Geo Tracking, Payment Gateway</li>
                        <li><i className="fas fa-check-circle" style={{color: "#106eea"}}></i>Analytics, SEO, Data Representation, Industry Standards</li>
                        <li><i className="fas fa-check-circle" style={{color: "#106eea"}}></i>Max Pro Resume, Soft Skills, Client Expectation Management</li>
                    </ul>
                    <button className="btn btn-lg btn-primary btn-pitch">APPLY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Pitch;