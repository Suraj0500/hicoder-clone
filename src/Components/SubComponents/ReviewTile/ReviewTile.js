import React from "react";
import "./ReviewTile.css"

function ReviewTile(props){
    return(
        <div className="review-tile-container">
            <i className="fas fa-quote-left fa-3x" style={{color:"rgba(18, 115, 235, 0.12)"}}></i>
            <p className="desc">{props.desc}</p>
            <img className="thumb-icon" src={"/images/" + props.img} alt="pp" />
            <h3>{props.name}</h3>
            <p className="designation" style={{color:"#878787"}}>{props.designation}</p>
        </div>
    );
};

export default ReviewTile;