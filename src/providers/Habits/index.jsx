import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [myHabits, setMyHabits] = useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTA4OTM3LCJqdGkiOiI5ZjFhY2IzOTVlM2U0NDFlOGZhYmMwN2FlMDFmMzIwZSIsInVzZXJfaWQiOjE1NH0.gN5205MvYs1_uEteOOXRFbjOAbUDqhF-99Idt4tfHFc";
  // O token foi pego da api e colocado aqui para teste
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
