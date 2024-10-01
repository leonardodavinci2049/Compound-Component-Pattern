import { useContext } from "react";
import { CounterContext } from "../Context/context";
import PropTypes from "prop-types";

const Decrease = ({ icon }) => {
    const { decrease } = useContext(CounterContext);
    return <button onClick={decrease}>{icon}</button>;
}

Decrease.propTypes = {
    icon: PropTypes.node.isRequired,
};

export default Decrease
