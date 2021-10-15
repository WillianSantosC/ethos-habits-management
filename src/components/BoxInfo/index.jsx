const BoxInfo = () => {
  //Pegar os dados do usuários e substituir no Objeto
  const dataCard = [
    { name: "Groups", icon: "group-icon", quantity: 3 },
    { name: "Habits", icon: "habit-icon", quantity: 10 },
    { name: "Activities", icon: "activity-icon", quantity: 4 },
    { name: "Goals", icon: "goal-icon", quantity: 1 },
  ];

  return (
    <div>
      <ul>
        {dataCard.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.icon}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxInfo;
