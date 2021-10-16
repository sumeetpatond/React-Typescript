import { useContext } from "react";
import UserContext from "../context/UserContext";

const Context2 = function () {
  const context = useContext(UserContext);
  return <span>Welcome {context?.name}</span>;
};

export default Context2;
