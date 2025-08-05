import { assets } from "../../assets/assets";
import Banner from "../../components/Banner";
import Contact from "./components/Contact";
import HeroSection from "./components/Hero-sec";
import Journey from "./components/Journey";
import Team from "./components/Team";

const AboutUs = () => {
 
  return (
    <>
      <Banner
        title={"About Us"}
        subtitle={"Empowering Intelligence with Innovation"}
        description={"Our mission is to bridge the gap between smart systems and human needs by designing software that learns, adapts, and solves real-world problems. Whether it’s through research, rapid prototyping, or full-scale development, our goal remains the same: To create intelligent solutions that truly make a difference."}
        image={assets.about} 
        />
      <Journey />
      <HeroSection/>
      <Team />
      <Contact/>
      
    </>
  )
};

export default AboutUs;
