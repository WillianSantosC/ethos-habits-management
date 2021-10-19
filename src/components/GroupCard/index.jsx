import { Link } from "react-router-dom";

const GroupCard = ({
  group: { id, name, description, category },
  unsubscribeGroup,
}) => {
  return (
    <li>
      <Link to={`/subscriptions/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{description}</p>
      <p>{category}</p>
      <span>{id}</span>
      <button onClick={() => unsubscribeGroup(id)}>Unsubscribe</button>
    </li>
  );
};

export default GroupCard;
