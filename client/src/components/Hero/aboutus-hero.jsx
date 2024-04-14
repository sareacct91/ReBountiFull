import { Link } from "react-router-dom";

// hero content for the about us
const AboutUsContent = () => (
  <div className="p-8 md:w-4/6 lg:w-1/2">
    <h1 className="text-stroke font-bold drop-shadow-lg">Our Mission</h1>
    <p className="my-10 rounded-lg bg-zinc-900 bg-opacity-70 p-10 text-2xl">
      At ReBountiFull (RBF), we are driven by the belief that good, clean, and
      safe food should not go to waste while people in our community go hungry.
      We empower grocery stores, restaurants, and individuals to donate surplus
      food, which we redistribute to those in need on a sliding scale that
      aligns with their household size. Rooted in integrity, service, and
      equity, we, as volunteers, are committed to reducing food waste and
      fighting hunger starting in the Bay Area. Through our efforts, we aim to
      halve food waste and alleviate hunger, envisioning a future where our
      model expands globally, supported by corporate partnerships for both food
      and monetary donations.
    </p>
    <div className="w-full">
      {/* need to add path to these buttons don't forget */}
        <Link to="/donate">
          <button>Download Impact Report</button>
        </Link>
        <Link to="/donate">
          <button className="mx-10">Give Now</button>
        </Link>
      </div>
    </div>
 
);

export default AboutUsContent;

