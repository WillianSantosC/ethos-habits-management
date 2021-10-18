import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const token = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  const [myGroups, setMyGroups] = useState([]);
  const [groups, setGroups] = useState([]);

  function getUserGroups() {
    api
      .get("/groups/subscriptions/", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyGroups(res.data))
      .catch((err) => console.log(err));
  }

  function allGroups() {
    api
      .get("/groups/")
      .then((res) => setGroups(res.data.results))
      .catch((err) => console.log(err));
  }

  function subscribeUser(id) {
    if (token) {
      api
        .post(`/groups/${id}/subscribe/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          null: "",
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  }

  function unsubscribeGroup(id) {
    if (token) {
      api
        .delete(`/groups/${id}/unsubscribe/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getUserGroups();
  }, [myGroups]);

  useEffect(() => {
    allGroups();
  }, [groups]);

  return (
    <GroupContext.Provider
      value={{ myGroups, groups, subscribeUser, unsubscribeGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
};
