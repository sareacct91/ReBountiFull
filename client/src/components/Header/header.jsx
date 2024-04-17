import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../Nav/nav";
import logo from "../../assets/images/logo.png";
import Background from "../Background/background";
import Headerbackground from "../../assets/background/header-background.png";
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

const Header = () => {
  const { pathname } = useLocation();
  const [background, setBackground] = useState(Headerbackground);
  const [position, setPosition] = useState("center");

  useEffect(() => {
    setBackground(backgrounds[pathname] || Headerbackground);
    setPosition(positions[pathname] || "center");
  }, [pathname]);

  return (
    <Background imageUrl={background} position={position}>
      <header className="sticky top-0 z-[20] flex w-full flex-wrap items-center justify-between">
        <div className="flex justify-center">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="z-[50] h-32 w-32 lg:h-48 lg:w-48 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Nav />
      </header>
    </Background>
  );
};

export default Header;
