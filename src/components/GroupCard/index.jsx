const GroupCard = ({ group: { id, name, description, category } }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{category}</p>
    </li>
  );
};

export default GroupCard;
