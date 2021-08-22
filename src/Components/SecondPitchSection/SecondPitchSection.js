import React from "react";
import "./SecondPitchSection.css";

function PitchSecond(){
    return(
        <div className="custom-container">
            <div className="pitch-content-box">
                <img className="right-img" src="/images/pitch-2-right-img.jpg" alt="right" align="right"></img>
                <div className="pitch-content-text-left">
                    <h1>Why HiCoder?</h1>
                    <p>HiCoder enables students to think about real-world problems, design, and develop the right solution. <a href="/">know more</a></p>
                    <div>
                        <img src="/images/why-section-1.png" height="70" align="left" alt="img"/>
                        <div>
                        <h3>Personalized Training</h3>
                        <p>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</p>
                        </div>
                        
                    </div>
                    <div>
                        <img src="/images/why-section-2.png" height="70" align="left" alt="img"/>
                        <div>
                        <h3>Production Projects</h3>
                        <p>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pitch-content-box">
                <img className="left-img" src="/images/pitch-2-left-img.jpg" alt="left" align="left"></img>
                <div className="pitch-content-text-right">
                    <h1>How does HiCoder help?</h1>
                    <p style={{color:"#585555", fontWeight: "700"}}>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</p>
                    <p>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</p>
                    <button className="btn btn-lg btn-pitch-2">KNOW MORE</button>
                </div>
            </div>
        </div>
    );
};

export default PitchSecond;