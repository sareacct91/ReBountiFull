import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Welcome!</h1>
      <img src={logo} />
      <h2>Sign up below to help us rebountify the world one bite at a time</h2>
      <div className="flex items-center gap-16">
        <div>
          <Link to={'/signup/supplier'}>
            <button>I'm a Supplier</button>
          </Link>
          <p>I'd like some produce</p>
        </div>
        <div>
          <Link to={'/signup/client'}>
            <button>I'm a Client</button>
          </Link>
          <p>I want to donate</p>
        </div>
      </div>
    </ div>
  );
}
