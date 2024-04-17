import { Link } from "react-router-dom";

// hero content for the homepage
const DonateContent = () => (
  // md:w-4/6 lg:w-1/2 <-- this was in below div className
  <div className="p-4 lg:p-8">
    <h1 className="text-stroke font-bold drop-shadow-lg">
      Make a Difference Today!
    </h1>
    <p className="my-10 rounded-lg bg-zinc-900 bg-opacity-70 p-3 lg:p-10 text-2xl">
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
        <button className="bg-blue-500 text-white font-bold text-lg">Monetary Donation</button>
        </Link>
        <Link to="">
          <button className="mt-2 lg:mx-10 bg-blue-500 text-white font-bold text-lg">Register Now</button>
        </Link>
      </div>
    </div>
);

export default DonateContent;
