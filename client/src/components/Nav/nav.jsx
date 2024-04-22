import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { QUERY_CART } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Auth from "../../utils/auth";

export default function Nav() {
  // pages
  const pages = [
    { page: "Cart", path: "cart" },
    { page: "Browse", path: 'browse' },
    { page: "Donate", path: 'donate' },
    { page: "About Us", path: 'aboutus' },
    { page: "Account", path: 'account' },
    { page: "Login", path: 'login' }
  ];

  const needLogin = ["Cart", "Browse", "Account"];
  // assinging pathnames for each pages
  // const pathnames = ["cart", "browse", "donate", "aboutus", "account", "login"];
  const [showNavbar, setShowNavbar] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const { loading, error, data } = useQuery(QUERY_CART);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  //updating the scrolled value based on the vertical scroll position of the window.
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
        className={`top-0 justify-end ${scrolled ? "fixed -right-3 top-3 z-50" : ""}`}
      >
        <div className="me-3 hidden w-full justify-between lg:flex">
          <ul
            className={`flex flex-row items-center ${scrolled ?
              "w-max h-10 rounded-full border-2 border-orange bg-opacity-90 p-8 gradient"
              : ""}`}
          >
            {pages.map((page) => {
              if (needLogin.includes(page.page) && !Auth.loggedIn()) {
                return null; // Return null to skip rendering this link
              }

              if (page.page === "Login" && Auth.loggedIn()) {
                return (
                  <li className="mx-2 text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]" key={page.page}>
                    <NavLink onClick={() => Auth.logout()} to={`/`}>
                      Logout
                    </NavLink>
                  </li>
                );
              }

              if (page.page === "Cart" && Auth.loggedIn()) {
                return (
                  <li
                    className="ms-2 me-5 flex items-center pt-1 text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]"
                    key={page.page}
                  >
                    <NavLink to={`/cart`}>
                      <p
                        className={`fixed z-20 transform text-green-500 hover:text-white ${scrolled ? "-translate-x-1 -translate-y-5" : "-translate-x-6 -translate-y-4"}`}
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
                  className={` text-white hover:text-orange ${scrolled ? "mx-8" : "mx-2 drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]"}`}
                  key={page.page}
                >
                  <NavLink to={`/${page.path}`}>{page.page}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* hamburger */}
        <div
          className={`hamburger m-10 lg:hidden ${scrolled ? "rounded-full border-2 border-orange bg-black p-4" : ""}`}
        >
          <label
            className={`bar ${scrolled ? "bg-black" : ""}`}
            htmlFor="check"
          >
            <input
              className="hidden"
              type="checkbox"
              id="check"
              onChange={toggleNavbar}
            />
            <span className="top mx-0.5"></span>
            <span className="middle mx-0.5"></span>
            <span className="bottom mx-0.5"></span>
          </label>
        </div>
      </nav>
      {/* Render the navbar when showNavbar is true and not scrolled */}
      {showNavbar && !scrolled && (
        <div className="flex basis-full flex-col items-center lg:hidden">
          {pages.map((page) => {
            if (needLogin.includes(page.page) && !Auth.loggedIn()) {
              return null;
            }

            if (page.page === "Login" && Auth.loggedIn()) {
              return (
                <li
                  className="mb-2 list-none text-white hover:text-orange drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]"
                  key={page.page}
                >
                  <NavLink onClick={() => Auth.logout()} to={`/`}>
                    Logout
                  </NavLink>
                </li>
              );
            }

            return (
              <li
                className="mx-2 list-none text-white hover:text-orange"
                key={page.page}
              >
                <NavLink to={`/${page.path}`}>{page.page}</NavLink>
              </li>
            );
          })}
        </div>
      )}

      {/* Render the navbar when showNavbar is true and scrolled */}
      {showNavbar && scrolled && (
        <div className="fixed right-16 top-36 flex flex-col items-center justify-end rounded-3xl bg-black p-10">
          {pages.map((page, i) => {
            if (needLogin.includes(page.page) && !Auth.loggedIn()) {
              return null;
            }

            if (page.page === "Login" && Auth.loggedIn()) {
              return (
                <li
                  className="my-2 list-none text-orange hover:text-orange drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]"
                  key={page.page}
                >
                  <NavLink onClick={() => Auth.logout()} to={`/`}>
                    Logout
                  </NavLink>
                </li>
              );
            }

            return (
              <li className="mx-2 list-none text-white hover:text-orange drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]" key={page.page}>
                <NavLink to={`/${page.path}`}>{page.page}</NavLink>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
}
