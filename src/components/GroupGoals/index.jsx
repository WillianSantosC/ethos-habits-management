import { useContext } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../providers/Goal";

function GroupGoals() {
  const { id } = useParams();
  const { groupGoals, getGroupGoals } = useContext(GoalsContext);

  getGroupGoals(id);

  return (
    <>
      {groupGoals.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
}

export default GroupGoals;
