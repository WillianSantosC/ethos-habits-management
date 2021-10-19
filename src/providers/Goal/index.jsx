import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { AccessContext } from "../../providers/Access";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [groupGoals, setGroupGoals] = useState([]);
  const { token } = useContext(AccessContext);

  function getGroupGoals(id) {
    api
      .get(`/goals/?group=${id}`)
      .then((res) => {
        setGroupGoals(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  function deleteGoal(id) {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <GoalsContext.Provider value={{ getGroupGoals, groupGoals, deleteGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
