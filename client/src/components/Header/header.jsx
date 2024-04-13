import logo from "../../assets/logo.png";
import Nav from "../Nav/nav";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import  Headerbackground  from "../../assets/background/header-background.png"

export default function Header() {
    const [background, setBackground] = useState(null);
  // setup the initial scrolled value to 'false'
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    // Check the current pathname and set the background accordingly
    if (pathname === "/donate" || pathname === "/aboutus") {
      setBackground(null); 
    } else {
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
        filter: "opacity(0.7)",
        backgroundPosition: "center",
      }}
    >
      <div className="cursor-pointer">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-32 w-32" />
          </Link>
        </div>
      </div>
      <Nav />
    </header>
  );
}
