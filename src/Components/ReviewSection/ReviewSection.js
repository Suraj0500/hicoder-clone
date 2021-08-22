import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./ReviewSection.css"
import ReviewTile from "../SubComponents/ReviewTile/ReviewTile";

function ReviewSection(){

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

    const reviews=[
        {
            desc: "This is a great opportunity for students coming from tier 2  tier 3 engineering colleges. HiCoder's syllabus looks wholesome as student will have opportunity to do both frontend as well as backend. Happy to see that IT Industry will have a wave of qualilty engineers", 
            img: "review-tile-img-1.jpg", 
            name: "Ashish Vishwaakrma",
            designation: "Software Engineer, Bosch"
        },
        {
            desc: "HiCoder is encouraging students to learn engineering. Having production grade development experience on project will reduce onboarding burden on candidates as well as project leads.", 
            img: "review-tile-img-2.jpg", 
            name: "Tapas Adhikary",
            designation: "UI/UX, Micro Focus"
        },
        {
            desc: "HiCoder is doing a good job by offering production grade learning. This will enable students to code whole application where students will end up on tech lead position in a few years.", 
            img: "review-tile-img-3.jpg", 
            name: "Sudhir Kumar",
            designation: "Technical Lead, HARMAN International"
        },
        {
            desc: "HiCoder didn't exist 15 years ago when I was preparing for software engineering career. In 2002, I had to pay hefty to get basic technical training. Good to see that HiCoder is removing the barrier of high tuition fee and encouraging students towards product focused learning than just teaching specific programming language that generally gets outdated.", 
            img: "review-tile-img-4.jpg", 
            name: "Srikant Rahul",
            designation: "Technical Architect, Hexaware Technologies"
        }
    ]

    return(
        <div id="review-container">
            <div className="review-title-box" align="center">
                <h2 style={{color: "#106eea"}}>THOUGHTS ON HICODER SYLLABUS</h2>
                <h1>Reviews by Industry Experts</h1>
                <div className="review-carousel-container">
                    <div className="review-left-img"></div>
                    <div className="review-carousel">
                        <OwlCarousel className="owl-theme review-owl-theme" loop items={1} dots={width>768? true : false}>
                            {reviews.map(review=>{
                                return(
                                    <div className="item">
                                        <ReviewTile desc={review.desc} img={review.img} name={review.name} designation={review.designation} />
                                    </div>
                                );
                            })}
                            
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;