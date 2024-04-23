import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-192px-40px)] items-center bg-white text-black">
      <h1 className="pt-16">Welcome!</h1>
      <img src={logo} className="max-h-96"/>
      <h2 className="text-black text-2xl pb-10">Sign up below to help us rebountify the world one bite at a time</h2>
      <div className="flex items-center gap-16">
        <div className="flex flex-col items-center pb-10">
          <Link to={'/signup/supplier'}>
            <button className="bg-blue-600">I have food to give</button>
          </Link>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Link to={'/signup/client'}>
            <button className="bg-blue-600">I would like some food</button>
          </Link>
        </div>
      </div>
    </ div>
  );
}
