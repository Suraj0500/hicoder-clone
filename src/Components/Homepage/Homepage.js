import React from "react";
import "./Homepage.css";

function Homepage(){
    return(
        <div className="homepage-container" id="homepage-section">
            <div className="content-box">
                <h2 style={{color:"#1c3988"}}>YOUR TIME, OUR EFFORTS</h2>
                <h1 className="homepage-heading">Pay After Job Full Stack Development Course</h1>
                <button className="btn btn-lg btn-homepage">KNOW MORE</button>
            </div>
            <div className="bottom-content">
                <h1>NEXT BATCH: 1st Sept. | Apply Now</h1>
            </div>
        </div>
    );
}

export default Homepage;