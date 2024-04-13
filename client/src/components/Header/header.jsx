import logo from '../../assets/logo.png';
import Nav from '../Nav/nav';
import { useEffect, useState } from "react";

export default function Header() {
  // setup the initial scrolled value to 'false'
  const [scrolled, setScrolled] = useState(false);

  const refresh = () => {
    window.location.reload();
  };
  useEffect(() => {
    const handleScroll = () => {
      //window.pageTOffset returns the number of pixels that the document has been scrolled vertically from the top
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 flex w-full mx-auto items-center justify-between flex-wrap">
      <div className="flex cursor-pointer">
        {/* logo */}
        <div onClick={refresh}>
          <img src={logo} alt="Logo" className=" h-32 w-32" />
        </div>
      </div>
      <Nav />
    </header>
  );
}
