import React from "react";
import NewsTile from "./../SubComponents/NewsTile/NewsTile";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./NewsSection.css";

function NewsSection(){

    const [width, setWidth]   = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    React.useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const news=[
        {
            heading:"IT project demand increases by 127% as offline businesses shut down.",
            date:"14 Oct 2020",
            img:"news-img-1.jpg"
        },
        {
            heading:"College education isn't enough to be relevant for the tech Industry",
            date:"06 Sep 2020",
            img:"news-img-2.jpg"
        },
        {
            heading:"Students having real time experience are less likey to have career gap.",
            date:"17 Aug 2019",
            img:"news-img-3.jpg"
        },
        {
            heading:"13 reasons why businesses love hiring failed entreprneurs.",
            date:"17 Oct 2020",
            img:"news-img-4.jpg"
        }
    ];


    return(
        <div id="news-container">
            <div className="news-title-box">
                <h2 align="center">NEWS</h2>
                <h1 align="center">#COVID19 Demands more full stack developers.</h1>
                <h1 align="center" style={{color:"#1c3988"}}> & Industry Updates</h1>
            </div>
            
            <div className="custom-container">
            <OwlCarousel className="owl-theme" loop-margin={10} items={width>768 ? 3 : 1} mouseDrag={true} touchDrag={true} loop={true} margin={25} dots={false} nav={false}>
                {news.map((val)=>{
                    return(<div className="item">
                        <NewsTile heading={val.heading} date={val.date} img={val.img}/>
                    </div>);
                })}
            </OwlCarousel>
                
            </div>
        </div>
    );
};

export default NewsSection;