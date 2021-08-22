import React from "react";
import "./LearnTile.css";

function LearnTile(props){
    return(
        <div className="learn-tile-container">
            <img src={"/images/learn-tile-icon-" + props.imgNum + ".png"} height="70" alt=""/>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default LearnTile;