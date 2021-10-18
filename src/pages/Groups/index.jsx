import { useContext } from "react";
import { Link } from "react-router-dom";
import CreateGroup from "../../components/CreateGroup";
import GroupCard from "../../components/GroupCard";
import SubGroupsCard from "../../components/SubGroupsCard";
import { GroupContext } from "../../providers/Group";

function Groups() {
  const { myGroups, groups, subscribeUser, unsubscribeGroup } =
    useContext(GroupContext);

  return (
    <div>
      <ul>
        {myGroups.map((item) => (
          <Link to={`/subscriptions/${item.id}`} key={item.id}>
            <GroupCard
              group={item}
              key={item.id}
              unsubscribeGroup={unsubscribeGroup}
            />
          </Link>
        ))}
      </ul>
      <ul>
        {groups.map((item) => (
          <Link to={`/groups/${item.id}`} key={item.id}>
            <SubGroupsCard
              group={item}
              key={item.id}
              subscribeUser={subscribeUser}
            />
          </Link>
        ))}
      </ul>
      <CreateGroup />
    </div>
  );
}

export default Groups;
