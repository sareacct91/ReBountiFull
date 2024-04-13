import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  // pages
  const pages = ["Cart", "Account", "Donate", "About Us", "Browse"];
  // assinging pathnames for each pages
  const pathnames = ["cart", "account", "donate", "aboutus", "browse"];
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="top-0 flex w-1/3 justify-end">
        <div className=" hidden w-full justify-between lg:flex">
          <ul className="flex flex-row">
            {pages.map((page,i) => (
              <li className="mx-2" key={page}>
                <NavLink to={`/${pathnames[i]}`}>{page}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* hamburger */}
        <div className="hamburger mr-10 lg:hidden">
          <label className="bar" htmlFor="check">
            <input type="checkbox" id="check" onChange={toggleNavbar} />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
      </nav>
      {/* If showNavbar is true, render the navbar */}
      {showNavbar && (
        <div className="flex basis-full flex-col items-center">
          {pages.map((page, i) => (
            <li className="mx-2 list-none" key={page}>
              <NavLink to={`/${pathnames[i]}`}>{page}</NavLink>
            </li>
          ))}
        </div>
      )}
    </>
  );
}
