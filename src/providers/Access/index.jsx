//pegar token da resposta da api
// guardar token no local storage
//

import { createContext } from "react";
export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const addToLocalStorage = (data) => {
    localStorage.setItem("@ethos:access", JSON.stringify(data));
  };

  return (
    <AccessContext.Provider value={{ addToLocalStorage }}>
      {children}
    </AccessContext.Provider>
  );
};
