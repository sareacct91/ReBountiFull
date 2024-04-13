import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  // pages
  const pages = ["Cart", "Account", "Donate", "About Us"];

  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="flex w-1/3 justify-end">
      {/* If showNavbar is true, render the navbar */}
      <div className="hidden w-full justify-between lg:flex">
        <ul className="flex flex-row">
          {pages.map((page) => (
            <li className="mx-2" key={page}>
              <NavLink to={`/${page}`}>{page}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="hamburger mr-10 mt-10 lg:hidden">
          <label className="bar" htmlFor="check">
            <input type="checkbox" id="check" onChange={toggleNavbar} />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
        {showNavbar && (
          <ul className="flex flex-col items-center ">
            {pages.map((page) => (
              <li key={page}>
                <NavLink to={`/${page}`}>{page}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
