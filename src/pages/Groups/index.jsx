import { useContext, useEffect, useState } from "react";
import CreateGroup from "../../components/CreateGroup";
import GroupCard from "../../components/GroupCard";
import SubGroupsCard from "../../components/SubGroupsCard";
import { GroupContext } from "../../providers/Group";
import api from "../../services/api";

function Groups() {
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState([]);

  const {
    myGroups,
    groups,
    subscribeUser,
    unsubscribeGroup,
    nextPage,
    previousPage,
    getUserGroups,
    allGroups,
  } = useContext(GroupContext);

  const handleFilter = (text) => {
    if (text) {
      api
        .get(`/groups/?category=${text}`)
        .then((res) => setFiltered(res.data.results));
    }
  };
  useEffect(() => {
    getUserGroups();
    allGroups();
  }, [groups, myGroups, getUserGroups, allGroups]);

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
        <p>Filtrar grupo</p>

        <input
          type="text"
          value={text}
          placeholder="Educação, saúde,..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => handleFilter(text)}>Pesquisar</button>

        {filtered &&
          filtered.map((item) => (
            <SubGroupsCard
              group={item}
              key={item.id}
              subscribeUser={subscribeUser}
            />
          ))}
        {groups.map((item) => (
          <SubGroupsCard
            group={item}
            key={item.id}
            subscribeUser={subscribeUser}
          />
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
