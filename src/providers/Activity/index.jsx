import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { AccessContext } from "../Access";

export const ActivityContext = createContext([]);

export const ActivityProvider = ({ children }) => {
  const [groupActivity, setGroupActivity] = useState([]);
  const { token } = useContext(AccessContext);

  function getGroupActivity(id) {
    api
      .get(`/activities/?group=${id}`)
      .then((res) => {
        setGroupActivity(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  function deleteActivity(id) {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Removido");
      })
      .catch((err) => {
        toast.error("Falha ao remover");
      });
  }

  return (
    <ActivityContext.Provider
      value={{ groupActivity, getGroupActivity, deleteActivity }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
