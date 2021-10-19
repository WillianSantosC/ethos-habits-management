const GroupCard = ({
  group: { id, name, description, category },
  unsubscribeGroup,
}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <button onClick={() => unsubscribeGroup(id)}>Unsubscribe</button>
    </li>
  );
};

export default GroupCard;
