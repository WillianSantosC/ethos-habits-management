import { useContext, useEffect, useState } from "react";
import CreateGroup from "../../components/CreateGroup";
import GroupCard from "../../components/GroupCard";
import SubGroupsCard from "../../components/SubGroupsCard";
import { GroupContext } from "../../providers/Group";
import Menu from "../../components/Menu";

import api from "../../services/api";
import {
  DisplayCards,
  GroupContainer,
  List,
  PageContainer,
  Title,
} from "./style";

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
    <PageContainer>
      <Menu />

      <GroupContainer>
        <CreateGroup />

        <DisplayCards>
          <Title>My Groups</Title>
          <List>
            {myGroups.map((item) => (
              <GroupCard
                group={item}
                key={item.id}
                unsubscribeGroup={unsubscribeGroup}
              />
            ))}
          </List>
        </DisplayCards>

        <ul>
          <div>
            <p>Filtrar grupo</p>

            <input
              type="text"
              value={text}
              placeholder="Educação, saúde,..."
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => handleFilter(text)}>Pesquisar</button>
          </div>
          <Title>Filtered Groups</Title>
          <List>
            {filtered.length > 1 ? (
              filtered.map((item) => (
                <SubGroupsCard
                  group={item}
                  key={item.id}
                  subscribeUser={subscribeUser}
                />
              ))
            ) : (
              <p>
                Pesquise uma categoria na barra acima, para encontrar o grupo
                ideal
              </p>
            )}
          </List>
          <Title>All Groups</Title>

          <List>
            {groups.map((item) => (
              <SubGroupsCard
                group={item}
                key={item.id}
                subscribeUser={subscribeUser}
              />
            ))}
          </List>

          <div>
            <button onClick={() => previousPage()}>Previous Page</button>
            <button onClick={() => nextPage()}>Next Page</button>
          </div>
        </ul>
      </GroupContainer>
    </PageContainer>
  );
}

export default Groups;
