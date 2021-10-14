import { useState } from "react";

type UserType = {
  name: string;
};

const User = function () {
  const [user, setUser] = useState<UserType | null>(null);

  const handleClick = function () {
    if (user) setUser(null);
    else setUser({ name: "Sumeet" });
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle User</button>
      Current User : {user?.name}
    </div>
  );
};

export default User;
