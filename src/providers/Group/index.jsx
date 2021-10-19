import { createContext, useEffect, useState, useContext } from "react";
import { AccessContext } from "../../providers/Access";
import api from "../../services/api";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const { token } = useContext(AccessContext);
  const [page, setPage] = useState(1);
  const [allGroupsCount, setAllGroupsCount] = useState(0);
  const [myGroups, setMyGroups] = useState([]);
  const [groups, setGroups] = useState([]);

  function getUserGroups() {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyGroups(res.data))

      .catch((err) => console.log(err));
  }

  function allGroups() {
    api
      .get(`/groups/?page=${page}`)
      .then((res) => {
        setGroups(res.data.results);
        setAllGroupsCount(res.data.count);
      })

      .catch((err) => console.log(err));
  }

  function subscribeUser(id) {
    console.log(token);
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function unsubscribeGroup(id) {
    // if (token) {
    console.log(token);
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function nextPage() {
    if (page < allGroupsCount / 15) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
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
      value={{
        myGroups,
        groups,
        subscribeUser,
        unsubscribeGroup,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
