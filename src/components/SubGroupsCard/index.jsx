import { Card, CardText, CardTitle, DataComponent } from "../HabitsCard/style";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const SubGroupsCard = ({ group: { id, name, category }, subscribeUser }) => {
  return (
    <Card>
      <DataComponent>
        <AiOutlineUsergroupAdd onClick={() => subscribeUser(id)}>
          Subscribe
        </AiOutlineUsergroupAdd>
        <CardTitle>{name}</CardTitle>
      </DataComponent>
      <DataComponent>
        <BiCategory />
        <CardText>{category}</CardText>
      </DataComponent>
    </Card>
  );
};

export default SubGroupsCard;
