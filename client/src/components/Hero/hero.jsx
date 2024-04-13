import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeHero from "../../assets/background/home-hero.jpeg";
import DonateHero from "../../assets/background/hero-donation.jpeg";
import AboutUsHero from "../../assets/background/aboutus_hero.jpeg"
import HomeContent from "./home-hero";

// Define a map of background images for different paths
const backgroundImages = {
  "/": HomeHero,
  "/donate": DonateHero,
  "/aboutus": AboutusHero,
};

// Get an array of paths from backgroundImages
const hasHero = Object.keys(backgroundImages);
console.log("hasHero: ",hasHero);


// Reusable HeroSection component
const HeroSection = ({ background, children }) => (
  <section
    className="w-full"
    style={{
      backgroundImage: background,
      backgroundPosition: "center",
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
};

export default function Hero() {
  const [background, setBackground] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Set the background based on the pathname
    setBackground(`url(${backgroundImages[pathname]})` || null);
  }, [pathname]);
  

  // Render different content based on the path
  if (hasHero.includes(pathname)) {
    return (
      <HeroSection background={background}>
        {/* Render specific content for each path */}
        {pathname === "/" && <HomeContent />}
      </HeroSection>
    );
  } else {
    return null; 
  }
}
// This is where old code begins below

export default function Hero() {
    const [background, setBackground] = useState(null);
    const { pathname } = useLocation();
    const hasHero = ["/", "/donate", "/aboutus"];
    console.log(pathname);
    useEffect(() => {
        if(pathname === "/")    {
        setBackground(`url(${HomeHero})`);
        } 
        else if (pathname === "/aboutus") {
          setBackground(`url(${AboutUsHero})`);
        }
        else {
        setBackground(null);
        }
    }, [pathname])

    if (!hasHero.includes(pathname))    {
        return <></>
    }

    if (pathname == "/")    {
        return (
      <section
        className="w-full"
        style={{
          backgroundImage: background,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/3 p-6">
          <h1>Hunger Relief Starts Here</h1>
          <p>
            We gather thousands of pounds of{" "}
            <span>perfectly good groceries</span> from local sources within your
            community that would otherwise go to waste and we make it available
            to you at a rate you can afford
          </p>
          <div className="my-5">
            <Link to="/donate">
              <button>Donation</button>
            </Link>
          </div>
        </div>
      </section>
        )
    }
    if (pathname === "/aboutus") {
      return(
        <section
        className="w-full"
        style={{
          backgroundImage: background,
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 p-6 bg-black/40 ml-2 justify-center">
          <h1>Our Mission</h1>
          <p>
          At ReBountiFull (RBF), we are driven by the belief that good, clean, and safe food should not go to waste while people in our community go hungry. We empower grocery stores, restaurants, and individuals to donate surplus food, which we redistribute to those in need on a sliding scale that aligns with their household size. Rooted in integrity, service, and equity, we, as volunteers, are committed to reducing food waste and fighting hunger starting in the Bay Area. Through our efforts, we aim to halve food waste and alleviate hunger, envisioning a future where our model expands globally, supported by corporate partnerships for both food and monetary donations.
          </p>
          <div className="my-5">
            {/* need to add path to these buttons don't forget */}
            <Link to="/donate">
              <button>Download Impact Report</button>
            </Link>
            <Link to="/donate">
              <button>Give Now</button>
            </Link>
          </div>
        </div>
      </section>

      )
    }

    
}