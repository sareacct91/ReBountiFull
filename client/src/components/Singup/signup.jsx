import React from "react";
import logo from "../../assets/logo.png";

export default function Signup() {

  return (
    <>
      <h1>Welcome!</h1>
      <img src={ logo } />
      <h2>Sign up below to help us rebountify the world one bite at a time</h2>
      <div className="bg-white flex items-center ">
        <div>
          <button>I'm a Client</button>
          <p>I want to donate</p>
        </div>
        <div>
          <button>I'm a Supplier</button>
          <p>I'd like some produce</p>
        </div>
      </div>
    </>
  );
}
