import { Link } from "react-router-dom";
import { Card, CardText, CardTitle, DataComponent } from "../HabitsCard/style";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import EditGroup from "../EditGroup";

const GroupCard = ({
  group: { id, name, category },
  unsubscribeGroup,
  item,
}) => {
  return (
    <Card>
      <DataComponent>
        <p> </p>
        <Link to={`/subscriptions/${id}`}>
          <FiMoreHorizontal id="more-button" />
        </Link>
        <CardTitle>{name}</CardTitle>
        <AiOutlineLogout
          onClick={() => unsubscribeGroup(id)}
          id="exit-button"
        ></AiOutlineLogout>
      </DataComponent>
      <DataComponent>
        <EditGroup item={item} />
        <CardText>{category}</CardText>
      </DataComponent>
    </Card>
  );
};

export default GroupCard;
