import PropTypes from "prop-types";

const Label = ({ children }) => {
  return <span>{children}</span>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
