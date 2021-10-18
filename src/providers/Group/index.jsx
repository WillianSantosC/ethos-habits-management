import { createContext, useState } from "react";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  return <GroupContext.Provider>{children}</GroupContext.Provider>;
};
