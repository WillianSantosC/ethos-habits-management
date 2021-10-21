import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  const parse = token ? jwtDecode(token) : "";

  const [authenticated, setAuthenticated] = useState(false);

  const addToLocalStorage = (data) => {
    localStorage.setItem("@ethos:access", JSON.stringify(data));
  };

  useEffect(() => {
    if (!!token) {
      return setAuthenticated(true);
    }
  }, [token]);

  return (
    <AccessContext.Provider
      value={{
        addToLocalStorage,
        token,
        parse,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AccessContext.Provider>
  );
};
