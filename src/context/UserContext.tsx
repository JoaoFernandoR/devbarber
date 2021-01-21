import React, { createContext } from "react";

interface IUser {
  name: string;
}

export const UserContext = createContext<IUser>({} as IUser);

export const UserProvider = ({ children }: any) => {
  return (
    <UserContext.Provider value={{ name: "John" }}>
      {children}
    </UserContext.Provider>
  );
};
