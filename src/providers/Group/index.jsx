import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const token = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  const [myGroups, setMyGroups] = useState([]);

  function getGroups() {
    api
      .get("/groups/subscriptions/", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyGroups(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getGroups();
  }, [myGroups]);

  return (
    <GroupContext.Provider value={{ myGroups }}>
      {children}
    </GroupContext.Provider>
  );
};
