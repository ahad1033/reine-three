import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import TextContent from "../TextContent/TextContent";
import AboutSection from "../AboutSection/AboutSection";
import Services from "../Services/Services";
import LookNaturalTextSection from "../LookNaturalTextSection/LookNaturalTextSection";
import WorkingHours from "../WorkingHours/WorkingHours";
import HomeParallax from "../HomeParallax/HomeParallax";
import ServiceMenu from "../ServiceMenu/ServiceMenu";
import Gallery from "../Gallery/Gallery";
import OurLocation from "../OurLocation/OurLocation";
import TrendingSection from '../../../Pages/Home/TrendingSection/TrendingSection';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      {/* <TextContent /> */}
      <AboutSection />
      <Services />
      {/* <LookNaturalTextSection /> */}
      {/* <WorkingHours />
           <HomeParallax />
           <ServiceMenu />
          */}
      <TrendingSection />
      <Gallery />
      <OurLocation />

    </div>
  );
};

export default Home;
