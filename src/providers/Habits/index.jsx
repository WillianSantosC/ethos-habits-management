import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [myHabits, setMyHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  function getHabits() {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMyHabits(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getHabits();
  }, [myHabits]);

  function removeHabits(id) {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateHabit(update, id) {
    const newUpdate = { how_much_achieved: update };

    api
      .patch(`/habits/${id}/`, newUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err));
  }

  return (
    <HabitsContext.Provider
      value={{ getHabits, myHabits, removeHabits, updateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
