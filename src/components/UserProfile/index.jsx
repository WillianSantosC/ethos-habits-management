import { UserContainer } from "./styles";
import LogOff from "../../assets/img/right-arrow.png";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import MobileLogOff from "../../assets/img/remove.png";

function UserProfile() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const [decodedUser] = useState(
    jwtDecode(JSON.parse(localStorage.getItem("@ethos:access"))) || ""
  );
  function getUserInfo() {
    api
      .get(`users/${decodedUser.user_id}/`)
      .then((res) => setUserInfo(res.data));
  }

  useEffect(() => {
    getUserInfo();
  });

  return (
    <UserContainer>
      <img
        src="https://i.pinimg.com/originals/e4/03/de/e403de788507db2505774f48f70a8eab.png"
        alt="Foto do Usuário"
      />
      <div className="infoContainer">
        <div className="name">
          <span>{userInfo.username}</span>
          <img
            src={LogOff}
            alt="LogOff"
            srcset=""
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          />
        </div>
        <div className="email">
          <span>{userInfo.email}</span>
        </div>
        <img src={MobileLogOff} alt="LogOff" className="mobileLogOff" />
      </div>
    </UserContainer>
  );
}

export default UserProfile;
