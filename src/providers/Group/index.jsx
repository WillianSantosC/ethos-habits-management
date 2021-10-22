import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { AccessContext } from "../../providers/Access";
import api from "../../services/api";
import { toast } from "react-hot-toast";
export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const { token } = useContext(AccessContext);
  const [page, setPage] = useState(1);
  const [allGroupsCount, setAllGroupsCount] = useState(0);
  const [myGroups, setMyGroups] = useState([]);
  const [groups, setGroups] = useState([]);

  const getUserGroups = useCallback(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyGroups(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  const allGroups = useCallback(() => {
    api
      .get(`/groups/?page=${page}`)
      .then((res) => {
        setGroups(res.data.results);
        setAllGroupsCount(res.data.count);
      })
      .catch((err) => console.log(err));
  }, [page]);

  function subscribeUser(id) {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Inscrito");
      })

      .catch((err) => {
        toast.error("Falha na inscrição");
      });
  }

  function unsubscribeGroup(id) {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Você saiu do grupo");
      })
      .catch((err) => {
        toast.error("Falha ao sair do grupo");
      });
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
    if (groups.length === 0) {
      allGroups();
    }
  }, [allGroups, groups.length]);

  return (
    <GroupContext.Provider
      value={{
        myGroups,
        groups,
        subscribeUser,
        unsubscribeGroup,
        nextPage,
        previousPage,
        getUserGroups,
        allGroups,
      }}

    >
      {children}
    </GroupContext.Provider>
  );
};
