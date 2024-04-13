import logo from "../../assets/images/logo.png";
import Nav from "../Nav/nav";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import  Headerbackground  from "../../assets/background/header-background.png"
import HomeHero from "../../assets/background/home-hero.jpeg"
import AboutUsHero from "../../assets/background/aboutus_hero.jpeg"
//import Hero from "../Hero/hero";

export default function Header() {
  // setup the initial background value to null
  const [background, setBackground] = useState(null);
  // setup the initial scrolled value to 'false'
  const [scrolled, setScrolled] = useState(false);
  const [pos, setPos] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    // if pathnames are following, set the background color to be transparent 
    // if (pathname === "/donate" || pathname === "/aboutus" || pathname === "/") {
    //   setBackground(null); 
    // } 
    if (pathname === "/") {
      setBackground(`url(${HomeHero})`);
      setPos("center");
    }
    else if (pathname === "/aboutus") {
      setBackground(`url(${AboutUsHero})`);
      setPos("bottom");
    }
    else {
      setBackground(`url(${Headerbackground})`);
    }
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      //window.pageYOffset returns the number of pixels that the document has been scrolled vertically from the top
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return (
    <header
      className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between"
      style={{
        backgroundImage: background,
        backgroundPosition: pos,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className=" w-1/6 cursor-pointer justify-center flex">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="z-[50] h-32 w-32" />
          </Link>
        </div>
      </div>
      <Nav />
    </header>
  );
}
