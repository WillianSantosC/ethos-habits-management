import { Link } from "react-router-dom";
import { useState } from "react";
import UserProfile from "../UserProfile";
import { Li, MenuContainer } from "./styles";

function Menu() {
  const [dashboard, setDashboard] = useState(true);
  const [groups, setGroups] = useState(false);
  const [habits, setHabits] = useState(false);

  return (
    <MenuContainer>
      <h3>
        ethos<span>_</span>
      </h3>
      <nav>
        <ul>
          <Li highlighted={dashboard}>
            <Link
              to="/dashboard"
              onClick={() => {
                setGroups(false);
                setHabits(false);
                setDashboard(true);
              }}
            >
              Dashboard
            </Link>
          </Li>
          <Li highlighted={groups}>
            <Link
              to="/groups"
              onClick={() => {
                setGroups(true);
                setHabits(false);
                setDashboard(false);
              }}
            >
              Groups
            </Link>
          </Li>
          <Li highlighted={habits}>
            <Link
              to="/habits"
              onClick={() => {
                setGroups(false);
                setHabits(true);
                setDashboard(false);
              }}
            >
              Habits
            </Link>
          </Li>
        </ul>
      </nav>
      <UserProfile />
    </MenuContainer>
  );
}

export default Menu;
