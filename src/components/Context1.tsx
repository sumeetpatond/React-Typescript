import { useState } from "react";
import UserContext, { UserContextType } from "../context/UserContext";
import Context2 from "./Context2";

const Context1 = function () {
  const [user, setUser] = useState<UserContextType | null>(null);
  return (
    <>
      {user ? (
        <UserContext.Provider value={user}>
          <button onClick={() => setUser(null)}>Log Out</button>
          <Context2 />
        </UserContext.Provider>
      ) : (
        <button onClick={() => setUser({ name: "Sumeet" })}>Log In</button>
      )}
    </>
  );
};

export default Context1;
