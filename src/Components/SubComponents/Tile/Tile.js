import React from "react";
import "./Tile.css";

function Tile(props){
    return(
        <div className="tile-container">
            <img src={props.src} alt="tile" height="75" />
            <h1>{props.quantity}</h1>
            <h2>{props.desc}</h2>
        </div>
    );
}

export default Tile;