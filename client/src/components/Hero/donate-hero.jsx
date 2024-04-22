import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

// hero content for the homepage
const DonateContent = () => (
  // md:w-4/6 lg:w-1/2 <-- this was in below div className
  <div className="p-4 lg:p-8">
    {/* <div className=" bg-zinc-900 bg-opacity-35 rounded-lg max-w-max pt-2 px-2"> */}
    <h1 className="text-stroke font-bold drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]">
      Make a Difference Today!
    </h1>
    {/* </div> */}
    <p className="my-10 rounded-lg bg-zinc-900 bg-opacity-70 p-3 text-2xl lg:w-1/2 lg:p-10">
      At ReBountiFull, we believe in
      <span className=" text-orange font-semibold">
        &nbsp;the power of collective action
      </span>
      &nbsp;to create positive change in our community. Together, we can make a
      difference in the lives of those in need.
    </p>
    <div className="w-full">
      {/* need to add path to these buttons don't forget */}
        <Link to="">
        <button className="bg-orange text-lg font-bold text-white">Monetary Donation</button>
        </Link>
        { !Auth.loggedIn() &&
        <Link to="/signup">
          <button className="bg-orange mt-2 text-lg font-bold text-white lg:mx-10">Register to Become a Supplier</button>
        </Link>
        }
      </div>
    </div>
);

export default DonateContent;
