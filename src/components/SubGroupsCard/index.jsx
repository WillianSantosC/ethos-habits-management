const SubGroupsCard = ({
  group: { id, name, description, category },
  subscribeUser,
}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <button onClick={() => subscribeUser(id)}>Subscribe</button>
    </li>
  );
};

export default SubGroupsCard;
