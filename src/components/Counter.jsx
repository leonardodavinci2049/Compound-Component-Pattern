import { useState } from "react";
import { CounterContext } from "../Context/context";
import PropTypes from "prop-types";

import Count from "./Count";
import Label from "./Label";
import Increase from "./Increase";
import Decrease from "./Decrease";




// 2. Create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}


Counter.propTypes = {
    children: PropTypes.node.isRequired,
  };

  
// 4. Add child components as proeprties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
