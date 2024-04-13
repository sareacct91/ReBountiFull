import { Link } from "react-router-dom";

// hero content for the about us
const AboutUsContent = () => (
  <div className="ml-2 w-1/2 justify-center bg-black/40 p-6">
    <h1>Our Mission</h1>
    <p>
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
    <div className="my-5">
      {/* need to add path to these buttons don't forget */}
      <Link to="/donate">
        <button>Download Impact Report</button>
      </Link>
      <Link to="/donate">
        <button>Give Now</button>
      </Link>
    </div>
  </div>
);

export default AboutUsContent;

