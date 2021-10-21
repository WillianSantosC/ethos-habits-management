import habitsIcon from "../../assets/img/pen.png";
import groupIcon from "../../assets/img/personal-data.png";
import goalIcon from "../../assets/img/goal.png";
import activityIcon from "../../assets/img/note-book.png";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { DataContainer } from "./styles";

const BoxInfo = () => {
  //Pegar os dados do usuários e substituir no Objeto

  const { myHabits } = useContext(HabitsContext);
  const funFacts = [
    "Sua vida é em grande parte a soma de todos seus hábitos - bons ou ruins.",
    "Você pode pegar as redeas de sua vida ao mudar seus hábitos",
    "É dificil largar algum hábito, já que você leva em média 66 dias até um hábito se fixar no seu cérebro",
    "Hábitos não somem completamente. Eles apenas são substituidos por outros.",
    "Uma pesquisa mostrou que o hábito de auto-aceitação é a causa da felicidade da maioria das pessoas",
    "Desejos são os motivadores do cérebro. Para algo se tornar um hábito, nosso cérebro deve desejar isso.",
  ];

  const devs = [
    {
      name: "Willian",
      linked:
        "https://ca.slack-edge.com/TQZR39SET-U01U86C2UER-06b57ca2fff3-512",
      image: "https://ca.slack-edge.com/TQZR39SET-U01U86C2UER-06b57ca2fff3-512",
    },
    {
      name: "Gabriel",
      linked: "https://www.linkedin.com/in/gabriel-gutierrez-b85996210/",
      image: "https://ca.slack-edge.com/TQZR39SET-U01SH3TBYLC-a8a00ca1e66a-512",
    },
    {
      name: "Madu",
      linked: "https://www.linkedin.com/in/madurubini/",
      image: "https://ca.slack-edge.com/TQZR39SET-U022YMF1464-ad3de11ecf6f-512",
    },
    {
      name: "Natan",
      linked: "https://www.linkedin.com/in/natanws/",
      image: "https://ca.slack-edge.com/TQZR39SET-U020WPS8BUY-563d1242a777-512",
    },
  ];

  const dataCard = [
    { name: "Habits", icon: habitsIcon, quantity: myHabits.length },
    { name: "My Groups", icon: groupIcon, quantity: 3 },
  ];

  return (
    <DataContainer>
      <ul>
        <li className="extraBox">
          <div>
            <span className="boxTitle">Fun Facts</span>
            <span className="funFact">
              {funFacts[Math.floor(Math.random() * funFacts.length)]}
            </span>
          </div>
        </li>
        {dataCard.map((item, index) => (
          <li key={index}>
            <div>
              <span className="boxTitle">{item.name}</span>
              <span className="boxNumber">{item.quantity}</span>
            </div>
            <img src={item.icon} alt={item.name}></img>
          </li>
        ))}
        <li className="extraBox devTeam">
          <div className="devTeam">
            <span className="boxTitle">Time ethos_</span>
            <div className="devDiv">
              {devs.map((dev, index) => (
                <div key={index}>
                  <a href={dev.linked} target="_blank" rel="noreferrer">
                    <img src={dev.image} alt={dev.name} />
                    <span>{dev.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </DataContainer>
  );
};

export default BoxInfo;
