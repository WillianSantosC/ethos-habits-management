import { useContext } from "react";
import { Link } from "react-router-dom";
import CreateGroup from "../../components/CreateGroup";
import GroupCard from "../../components/GroupCard";
import SubGroupsCard from "../../components/SubGroupsCard";
import { GroupContext } from "../../providers/Group";

function Groups() {
  const {
    myGroups,
    groups,
    subscribeUser,
    unsubscribeGroup,
    nextPage,
    previousPage,
  } = useContext(GroupContext);

  return (
    <div>
      <ul>
        {myGroups.map((item) => (
          <GroupCard
            group={item}
            key={item.id}
            unsubscribeGroup={unsubscribeGroup}
          />
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
      <button onClick={() => previousPage()}>Previous Page</button>
      <button onClick={() => nextPage()}>Next Page</button>
      {groups.length}
      <CreateGroup />
    </div>
  );
}

export default Groups;
