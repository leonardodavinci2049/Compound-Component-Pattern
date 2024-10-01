import { useContext } from "react";
import { CounterContext } from "../Context/context";
import PropTypes from "prop-types";


const Increase = ({ icon }) => {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
};

Increase.propTypes = {
  icon: PropTypes.node.isRequired,
};

export default Increase;
