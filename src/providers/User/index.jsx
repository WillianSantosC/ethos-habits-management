import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const addUsernameToLocal = (data) => {
    localStorage.setItem("@ethos:username", JSON.stringify(data));
  };
  return (
    <UserContext.Provider value={{ addUsernameToLocal }}>
      {children}
    </UserContext.Provider>
  );
};
