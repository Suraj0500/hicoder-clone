import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Homepage from "./Components/Homepage/Homepage.js";
import Pitch from "./Components/PitchSection/PitchSection.js"
import Ratings from "./Components/RatingsSection/RatingsSection.js";
import PitchSecond from "./Components/SecondPitchSection/SecondPitchSection.js";
import ReviewSection from "./Components/ReviewSection/ReviewSection.js";
import Learn from "./Components/LearnSection/LearnSection.js";
import Partners from "./Components/PartnerSection/PartnerSection.js";
import NewsSection from "./Components/NewsSection/NewsSection.js";
import FooterSection from "./Components/FooterSection/FooterSection.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Pitch />
      <Ratings />
      <PitchSecond />
      <Learn />
      <ReviewSection />
      <Partners />
      <NewsSection />
      <FooterSection />
    </div>
  );
};

export default App;
