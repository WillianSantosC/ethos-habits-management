import { createContext, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [myHabits, setMyHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  const getHabits = useCallback(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyHabits(res.data))
      .catch((err) => console.log(err));
  }, [setMyHabits, token]);

  useEffect(() => {
    if (myHabits.length === 0) {
      getHabits();
    }
  }, [myHabits.length, getHabits]);

  function removeHabits(id) {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Removido");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao remover");
      });
  }

  function updateHabit(update, id) {
    const newUpdate = { how_much_achieved: update };

    api
      .patch(`/habits/${id}/`, newUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Atualizado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao atualizar");
      });
  }

  return (
    <HabitsContext.Provider
      value={{ getHabits, myHabits, removeHabits, updateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
