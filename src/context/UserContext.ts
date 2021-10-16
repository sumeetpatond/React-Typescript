import { createContext } from "react";

export type UserContextType = {
  name: string;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
