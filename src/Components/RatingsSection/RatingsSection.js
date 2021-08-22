import React from "react";
import Tile from "../SubComponents/Tile/Tile.js";
import "./RatingsSection.css";

function Ratings(){
    return(
        <div className="small-container">
            <Tile src="/images/tile-icon-1.png" quantity="34 +" desc="PROJECTS COMPLETED" />
            <Tile src="/images/tile-icon-2.png" quantity="47 +" desc="INDUSTRY EXPERTS"/>
            <Tile src="/images/tile-icon-3.png" quantity="30 +" desc="QUALITY DEVELOPERS"/>
            <Tile src="/images/tile-icon-4.png" quantity="40,000,00 +" desc="APPLICATION USERS"/>
        </div>
    );
}

export default Ratings;