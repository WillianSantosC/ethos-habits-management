import { useContext } from "react";
import GroupCard from "../../components/GroupCard";
import { GroupContext } from "../../providers/Group";

function Groups() {
  const { myGroups } = useContext(GroupContext);

  return (
    <ul>
      {myGroups.map((item) => (
        <GroupCard group={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Groups;
