import { UserContainer } from "./styles";
import LogOff from "../../assets/img/right-arrow.png";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import MobileLogOff from "../../assets/img/remove.png";
import { AccessContext } from "../../providers/Access";

function UserProfile() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const { parse } = useContext(AccessContext);
  const { setAuthenticated } = useContext(AccessContext);

  // const [decodedUser] = useState(
  //   jwtDecode(JSON.parse(localStorage.getItem("@ethos:access"))) || ""
  // );
  // const { setAuthenticated } = useContext(AccessContext);

  function getUserInfo() {
    api.get(`users/${parse.user_id}/`).then((res) => setUserInfo(res.data));
  }

  useEffect(() => {
    getUserInfo();
  }, []);

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
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false);
              history.push("/");
            }}
          />
        </div>
        <div className="email">
          <span>{userInfo.email}</span>
        </div>
        <img src={LogOff} alt="LogOff" className="mobileLogOff" onClick = {() => {
          localStorage.clear()
          setAuthenticated(false)
          history.push('/')
        }} />
      </div>
    </UserContainer>
  );
}

export default UserProfile;
