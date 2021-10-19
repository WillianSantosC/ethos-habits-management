//pegar token da resposta da api
// guardar token no local storage
import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );
  const [parse, setParse] = useState(
    jwtDecode(JSON.parse(localStorage.getItem("@ethos:access"))) || ""
  );

  const addToLocalStorage = (data) => {
    localStorage.setItem("@ethos:access", JSON.stringify(data));
    // const parsedToken = JSON.parse(localStorage.getItem("@ethos:access")) || "";

    // setParse(jwtDecode(parsedToken));
  };

  return (
    <AccessContext.Provider value={{ addToLocalStorage, token, parse }}>
      {children}
    </AccessContext.Provider>
  );
};
