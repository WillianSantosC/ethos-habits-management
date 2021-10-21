import { Card, CardText, CardTitle, SideComponent } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";

function HabitsCard({
  habits: { id, title, category, difficulty, frequency, how_much_achieved },
}) {
  const { removeHabits, updateHabit } = useContext(HabitsContext);

  return (
    <Card>
      <SideComponent>
        <MdUpdate onClick={() => updateHabit(how_much_achieved + 1, id)}>
          Update
        </MdUpdate>
        <CardTitle>{title}</CardTitle>
        <AiOutlineCloseCircle onClick={() => removeHabits(id)} />
      </SideComponent>
      <CardText>{category}</CardText>
      <SideComponent>
        <CardText>
          <CardTitle>Dificuldade</CardTitle> {difficulty}
        </CardText>
        <CardText>
          <CardTitle>Frequência</CardTitle> {frequency}
        </CardText>
      </SideComponent>
      <CardText>Status: {how_much_achieved} dias</CardText>
    </Card>
  );
}

export default HabitsCard;
