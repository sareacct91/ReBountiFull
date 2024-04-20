import { Link } from "react-router-dom";

// hero content for the homepage
const DonateContent = () => (
  // md:w-4/6 lg:w-1/2 <-- this was in below div className
  <div className="p-4 lg:p-8">
    <h1 className="text-stroke font-bold drop-shadow-lg">
      Make a Difference Today!
    </h1>
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
        <Link to="/signup">
          <button className="bg-orange mt-2 text-lg font-bold text-white lg:mx-10">Register Now</button>
        </Link>
      </div>
    </div>
);

export default DonateContent;
