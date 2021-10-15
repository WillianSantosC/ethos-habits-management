import { Link } from "react-router-dom";
import UserProfile from "../UserProfile";
import { MenuContainer } from "./styles";

function Menu() {
  return (
    <MenuContainer>
      <span>ethos_</span>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/habits">Habits</Link>
          </li>
        </ul>
      </nav>
      <UserProfile />
    </MenuContainer>
  );
}

export default Menu;
