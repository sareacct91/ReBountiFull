import { Link } from "react-router-dom";

// hero content for the homepage
const HeroContent = () => (
  <div className="p-6 md:w-1/2 lg:w-1/3">
    <h1>Hunger Relief Starts Here</h1>
    <p>
      We gather thousands of pounds of <span>perfectly good groceries</span>{" "}
      from local sources within your community that would otherwise go to waste
      and we make it available to you at a rate you can afford
    </p>
    <div className="my-5">
      {/* link to the donation page */}
      <Link to="/donate">
        <button>Donation</button>
      </Link>
    </div>
  </div>
);

export default HeroContent;
