import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./PartnerSection.css";

function Partners(){

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

    const partners=["partner-logo-1.jpg", "partner-logo-2.jpg", "partner-logo-3.jpg", "partner-logo-4.jpg", "partner-logo-5.jpg", "partner-logo-6.jpg", "partner-logo-7.jpg"];
    return(
        <div id="partner-section">
            <h1 align="center">Partner & Associates</h1>
            <OwlCarousel className="owl-theme" items={width>768 ? 4 : 2} margin={30} loop={true} dots={false}>
                {partners.map((partner)=>{
                    return(
                        <div className="item">
                            <img className="partner-logo" src={"/images/" + partner} alt="partner" />
                        </div>
                    );
                })}
            </OwlCarousel>
        </div>
    );
};

export default Partners;