import React from "react";
import "./NewsTile.css";

function NewsTile(props){

    const [headingText, setHeadingText] = React.useState(false);
    const [onTile, setOnTile] = React.useState(false);
    return(
        <div className="news-tile-container" onMouseEnter={()=>{setOnTile(!onTile)}} onMouseLeave={()=>{setOnTile(!onTile)}}>
            <img className={onTile===true ? "faded" : "solid"} src={"/images/" + props.img}  alt="news-img"/>
            <div className="news-content-box">
                <h3 className={headingText===true ? "green" : "black"} onMouseEnter={()=>{setHeadingText(!headingText)}} onMouseLeave={()=>{setHeadingText(!headingText)}}>{props.heading}</h3>
                <div className="bottom-news-tile">
                    <div className="complete-logo">
                        <img src="/images/logo-avatar.png" className="news-logo" />
                        <p>HiCoder</p>
                    </div>
                    <p><i className="far fa-clock news-clock-icon" style={{color:"#67c27c"}}></i>{props.date}</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default NewsTile;