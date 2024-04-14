import PropTypes from "prop-types";

const Background = ({ imageUrl, position, children }) => (
  <section
    className="w-full"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: position,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}
  >
    {children}
  </section>
);

Background.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string,
  children: PropTypes.node,
};

export default Background;
