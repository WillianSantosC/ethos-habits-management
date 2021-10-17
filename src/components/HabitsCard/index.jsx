import { Card } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";

function HabitsCard({
  habits: { id, title, category, difficulty, frequency, how_much_achieved },
}) {
  const { removeHabits, updateHabit } = useContext(HabitsContext);

  return (
    <Card>
      <AiOutlineCloseCircle onClick={() => removeHabits(id)} />
      <p>{title}</p>
      <p>{category}</p>
      <p>{difficulty}</p>
      <p>{frequency}</p>
      <p>Percent: {how_much_achieved} dias</p>
      <button onClick={() => updateHabit(how_much_achieved + 1, id)}>
        Update
      </button>
    </Card>
  );
}

export default HabitsCard;
