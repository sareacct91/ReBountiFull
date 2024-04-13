import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeHero from "../../assets/background/home-hero.jpeg";
import AboutUsHero from "../../assets/background/aboutus_hero.jpeg"
import HomeContent from "./home-hero";
import AboutUsContent from "./aboutus-hero";

// Define a map of background images for different paths
const backgroundImages = {
  "/": HomeHero,
  // "/donate": DonateHero,
  "/aboutus": AboutUsHero,
};

const pointOfView = {
  "/": "center",
  // "/donate": "",
  "/aboutus": "bottom",
};

// Get an array of paths from backgroundImages
const hasHero = Object.keys(backgroundImages);
console.log("hasHero: ",hasHero);


// Reusable HeroSection component
const HeroSection = ({ background, pos , children }) => (
  <section
    className="w-full"
    style={{
      backgroundImage: background,
      backgroundPosition: pos,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}
  >
    {children}
  </section>
);

// setting up the propTypes for the HeroSection 
HeroSection.propTypes = {
  // specifying each props
  background: PropTypes.string,
  children: PropTypes.node,
  pos: PropTypes.string,
};

export default function Hero() {
  const [background, setBackground] = useState(null);
  const [pos, setPos] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    // Set the background based on the pathname
    setBackground(`url(${backgroundImages[pathname]})` || null);
    setPos(pointOfView[pathname] || "");
  }, [pathname]);
  

  // Render different content based on the path
  if (hasHero.includes(pathname)) {
    return (
      <HeroSection background={background} pos={pos}>
        {/* Render specific content for each path */}
        {pathname === "/" && <HomeContent />}
        {pathname === "/aboutus" && <AboutUsContent />}
      </HeroSection>
    );
  } else {
    return null; 
  }
}
