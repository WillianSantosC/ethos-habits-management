import { useContext, useEffect, useState } from "react";
import CreateGroup from "../../components/CreateGroup";
import GroupCard from "../../components/GroupCard";
import SubGroupsCard from "../../components/SubGroupsCard";
import { GroupContext } from "../../providers/Group";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button";
import Menu from "../../components/Menu";

import api from "../../services/api";
import {
  DisplayCards,
  GroupContainer,
  List,
  PageContainer,
  Search,
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
        <h1>Grupos</h1>
        <CreateGroup />

        <DisplayCards>
          <Title>Meus grupos</Title>
          <List>
            {myGroups.map((item) => (
              <GroupCard
                group={item}
                key={item.id}
                unsubscribeGroup={unsubscribeGroup}
                item={item}
              />
            ))}
          </List>
        </DisplayCards>

        <ul>
          <div>
            <h3>Filtrar grupo por categoria</h3>
            <Search>
              <TextField
                size="small"
                margin="none"
                label="Categoria"
                placeholder="Educação, saúde, ..."
                variant="filled"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button pinkSchema onClick={() => handleFilter(text)}>
                Pesquisar
              </Button>
            </Search>
          </div>
          <Title>Grupos Filtrados</Title>
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
          <Title>Todos os Grupos</Title>

          <List>
            {groups.map((item) => (
              <SubGroupsCard
                group={item}
                key={item.id}
                subscribeUser={subscribeUser}
              />
            ))}
          </List>
        </ul>
      </GroupContainer>
    </PageContainer>
  );
}

export default Groups;
