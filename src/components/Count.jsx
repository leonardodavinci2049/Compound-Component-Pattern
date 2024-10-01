import { useContext } from "react";
import { CounterContext } from "../Context/context";
// 3. Create child components to help implementing the common task
const Count = () => {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
};

export default Count;
