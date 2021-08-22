import React from "react";
import LearnTile from "../SubComponents/LearnTile/LearnTile.js";
import "./LearnSection.css";

function Learn(){
    return(
        <div id="learn-section">
            <div className="learn-title-box">
                <h2>WHAT YOU LEARN</h2>
                <h1>at HiCoder is useful</h1>
                <h1 style={{color:"#1c3988"}}>Technology, Management & more</h1>
            </div>
            <div className="custom-container">
                <LearnTile imgNum="1" title="Front End" content="Students learn to design, develope the UI following UX with industry standards." />
                <LearnTile imgNum="2" title="Backend" content="Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc." />
                <LearnTile imgNum="3" title="Project Management" content="Students learn to plan, project, and execute development projects with client expectation." />
                <LearnTile imgNum="4" title="Production Deployment" content="Students learn to create a server, deploy an application following security guidelines." />
                <LearnTile imgNum="5" title="Basic Analytics" content="Students learn about analytics, usability, and integration of analytics in their production application." />
                <LearnTile imgNum="6" title="Soft Skills" content="Soft skills encourages open communication & enhances corporate skills having corporate attitude." />
                <LearnTile imgNum="7" title="Industry Standards" content="Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort." />
                <LearnTile imgNum="8" title="Max Pro Resume" content="Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume." />
            </div>
        </div>
    );
};


export default Learn;