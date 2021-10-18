import { Link } from "react-router-dom";
import UserProfile from "../UserProfile";
import { Li, MenuContainer } from "./styles";

function Menu() {
  return (
    <MenuContainer>
      <h3>
        ethos<span>_</span>
      </h3>
      <nav>
        <ul>
          <Li highlighted>
            <Link to="/dashboard">Dashboard</Link>
          </Li>
          <Li>
            <Link to="/groups">Groups</Link>
          </Li>
          <Li>
            <Link to="/habits">Habits</Link>
          </Li>
        </ul>
      </nav>
      <UserProfile />
    </MenuContainer>
  );
}

export default Menu;
