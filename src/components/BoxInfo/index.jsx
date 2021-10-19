import habitsIcon from "../../assets/img/pen.png";
import groupIcon from "../../assets/img/personal-data.png";
import goalIcon from "../../assets/img/goal.png";
import activityIcon from "../../assets/img/note-book.png";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

const BoxInfo = () => {
  //Pegar os dados do usuários e substituir no Objeto

  const { myHabits } = useContext(HabitsContext);

  const dataCard = [
    { name: "Groups", icon: groupIcon, quantity: 3 },
    { name: "Habits", icon: habitsIcon, quantity: myHabits.length },
    { name: "Activities", icon: activityIcon, quantity: 4 },
    { name: "Goals", icon: goalIcon, quantity: 1 },
  ];

  return (
    <div>
      <ul>
        {dataCard.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <img src={item.icon} alt={item.name}></img>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxInfo;
