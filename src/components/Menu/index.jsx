import { Link } from "react-router-dom";
import { useState } from "react";
import UserProfile from "../UserProfile";
import { Li, MenuContainer } from "./styles";
import DashboardIcon from "../../assets/img/organizer.png";
import GroupsIcon from "../../assets/img/personal-data.png";
import HabitsIcon from "../../assets/img/pen.png";
import Logo from "../../assets/img/logos/ethos-original.png";

function Menu() {
  const [dashboard, setDashboard] = useState(true);
  const [groups, setGroups] = useState(false);
  const [habits, setHabits] = useState(false);

  return (
    <MenuContainer>
      <h3>
        <img src={Logo} alt="ethos" />
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
              <img src={DashboardIcon} alt="Dashboard" className="iconImage" />
              <span>Dashboard</span>
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
              <img src={GroupsIcon} alt="Groups" className="iconImage" />
              <span>Groups</span>
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
              <img src={HabitsIcon} alt="Habits" className="iconImage" />
              <span>Habits</span>
            </Link>
          </Li>
        </ul>
      </nav>
      <UserProfile />
    </MenuContainer>
  );
}

export default Menu;
