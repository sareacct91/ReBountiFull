import { NavLink } from "react-router-dom";
import { useState } from "react";
import Auth from "../../utils/auth";

export default function Nav() {
  // pages
  const pages = ["Cart", "Account", "Donate", "About Us", "Browse", "Login"];
  const needLogin = ["Cart", "Account", "Browse"];
  // assinging pathnames for each pages
  const pathnames = ["cart", "account", "donate", "aboutus", "browse", "login"];
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="top-0 flex justify-end">
        <div className=" me-3 hidden w-full justify-between lg:flex">
          <ul className="flex flex-row">
            {pages.map((page,i) => {
              if (needLogin.includes(page) && !Auth.loggedIn()) {
                return (<></>);
              }

              if (page === "Login" && Auth.loggedIn()) {
                return (
                  <li className="mx-2 text-white" key={page}>
                    <NavLink onClick={() => Auth.logout()} to={`/`}>Logout</NavLink>
                  </li>
                )
              }

              return (
                <li className="mx-2 text-white" key={page}>
                  <NavLink to={`/${pathnames[i]}`}>{page}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>

        {/* hamburger */}
        <div className="hamburger mr-10 lg:hidden">
          <label className="bar" htmlFor="check">
            <input className="hidden" type="checkbox" id="check" onChange={toggleNavbar} />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
      </nav>
      {/* If showNavbar is true, render the navbar */}
      {showNavbar && (
        <div className="flex basis-full flex-col items-center lg:hidden">
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
