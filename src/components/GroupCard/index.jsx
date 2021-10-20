import { Link } from "react-router-dom";
import { Card, CardText, CardTitle, DataComponent } from "../HabitsCard/style";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

const GroupCard = ({ group: { id, name, category }, unsubscribeGroup }) => {
  return (
    <Card>
      <DataComponent>
        <p> </p>
        <Link to={`/subscriptions/${id}`}>
          <FiMoreHorizontal />
        </Link>
        <CardTitle>{name}</CardTitle>
        <AiOutlineLogout onClick={() => unsubscribeGroup(id)}></AiOutlineLogout>
      </DataComponent>
      <DataComponent>
        <BiCategory />
        <CardText>{category}</CardText>
      </DataComponent>
    </Card>
  );
};

export default GroupCard;
