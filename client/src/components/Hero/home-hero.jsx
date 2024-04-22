import { Link } from "react-router-dom";

// hero content for the homepage
const HeroContent = () => (
  <div className=" p-8 md:w-4/6 lg:w-1/2">
    <h1 className="font-bold drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]">
      Hunger Relief Starts Here
    </h1>
    <p className="my-10 rounded-lg bg-zinc-900 bg-opacity-70 p-10 text-2xl">
      We gather thousands of pounds of
      <span className=" text-orange font-semibold">
        &nbsp;perfectly good groceries
      </span>
      &nbsp;from local sources within your community that would otherwise go to
      waste and we make it available to you at a rate you can afford
    </p>
    <div className="my-5">
      {/* link to the donation page */}
      <Link to="/donate">
      <button className="bg-green-600 text-white font-bold text-lg">Donate</button>
      </Link>
    </div>
  </div>
);

export default HeroContent;
