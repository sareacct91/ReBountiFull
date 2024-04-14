import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../Background/background";
import HomeContent from "./home-hero";
import AboutUsContent from "./aboutus-hero";
import DonateContent from "./donate-hero";
import HomeHero from "../../assets/background/home-hero.jpeg";
import AboutUsHero from "../../assets/background/aboutus_hero.jpeg";
import DonateHero from "../../assets/background/donation.png";

const backgrounds = {
  "/": HomeHero,
  "/aboutus": AboutUsHero,
  "/donate": DonateHero,
};

const positions = {
  "/": "center",
  "/aboutus": "bottom",
  "/donate": "bottom",
};

const Hero = () => {
  const { pathname } = useLocation();
  const [background, setBackground] = useState(HomeHero);
  const [position, setPosition] = useState("center");

  useEffect(() => {
    setBackground(backgrounds[pathname] || HomeHero);
    setPosition(positions[pathname] || "center");
  }, [pathname]);

  const hasHero = Object.keys(backgrounds).includes(pathname);

  return hasHero ? (
    <Background imageUrl={background} position={position}>
      {pathname === "/" && <HomeContent />}
      {pathname === "/aboutus" && <AboutUsContent />}
      {pathname === "/donate" && <DonateContent />}
    </Background>
  ) : null;
};

export default Hero;
