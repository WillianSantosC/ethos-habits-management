import { Link } from "react-router-dom";

const SubGroupsCard = ({
  group: { id, name, description, category },
  subscribeUser,
}) => {
  return (
    <li>
      <Link to={`/allGroups/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{description}</p>
      <p>{category}</p>
      <span>{id}</span>
      <button onClick={() => subscribeUser(id)}>Subscribe</button>
    </li>
  );
};

export default SubGroupsCard;
