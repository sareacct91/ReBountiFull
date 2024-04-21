import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { QUERY_CART } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Auth from "../../utils/auth";

export default function Nav() {
  // pages
  const pages = ["Cart", "Account", "Donate", "About Us", "Browse", "Login"];
  const needLogin = ["Cart", "Account", "Browse"];
  // assinging pathnames for each pages
  const pathnames = ["cart", "account", "donate", "aboutus", "browse", "login"];
  const [showNavbar, setShowNavbar] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const { loading, error, data } = useQuery(QUERY_CART);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  //updating the scrolled value based on the ertical scroll position of the window.
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (scrolled) {
    console.log("Scrolled!");
  }

  useEffect(() => {
    if (data) {
      const { getCart } = data;
      console.log("My Cart: ", getCart, "total items: ", getCart.totalItems);
      setTotalItems(getCart.totalItems);
      console.log("total items after setting : ", getCart.totalItems);
    }
  }, [data]);
  
  return (
    <>
      <nav
        className={`top-0 justify-end ${scrolled ? "fixed -right-3 top-3" : ""}`}
      >
        <div className=" me-3 hidden w-full justify-between lg:flex">
          <ul className={`flex flex-row items-center ${scrolled ? "p-8 bg-gray-500 w-screen rounded-full" : ""}`}>
            {pages.map((page, i) => {
              if (needLogin.includes(page) && !Auth.loggedIn()) {
                return null; // Return null to skip rendering this link
              }

              if (page === "Login" && Auth.loggedIn()) {
                return (
                  <li className="mx-2 text-white" key={page}>
                    <NavLink onClick={() => Auth.logout()} to={`/`}>
                      Logout
                    </NavLink>
                  </li>
                );
              }
              if (page === "Cart" && Auth.loggedIn()) {
                return (
                  <li
                    className="mx-2 flex items-center pt-1 text-white"
                    key={page}
                  >
                    <NavLink to={`/cart`}>
                      <p
                        className={`fixed z-20 transform text-green-500 hover:text-white ${scrolled ? "-translate-y-5" : "-translate-x-6 -translate-y-4"}`}
                      >
                        {totalItems}
                      </p>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className={`hover:text-orange-500 fa-2xl fixed  transform ${scrolled ? "-translate-x-5 -translate-y-5" : "-translate-x-10 -translate-y-4"}`}
                      />
                    </NavLink>
                  </li>
                );
              }

              return (
                <li
                  className={` text-white ${scrolled ? "mx-8" : "mx-2"}`}
                  key={page}
                >
                  <NavLink to={`/${pathnames[i]}`}>{page}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* hamburger */}
        <div className="hamburger mr-10 lg:hidden">
          <label className="bar" htmlFor="check">
            <input
              className="hidden"
              type="checkbox"
              id="check"
              onChange={toggleNavbar}
            />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
      </nav>
      {/* If showNavbar is true, render the navbar */}
      {showNavbar && (
        <div className="flex basis-full flex-col items-center lg:hidden">
          {pages.map((page, i) => {
            if (needLogin.includes(page) && !Auth.loggedIn()) {
              return null;
            }

            if (page === "Login" && Auth.loggedIn()) {
              return (
                <li className="mb-2 list-none text-white" key={page}>
                  <NavLink onClick={() => Auth.logout()} to={`/`}>
                    Logout
                  </NavLink>
                </li>
              );
            }

            return (
              <li className="mx-2 list-none" key={page}>
                <NavLink to={`/${pathnames[i]}`}>{page}</NavLink>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
}
