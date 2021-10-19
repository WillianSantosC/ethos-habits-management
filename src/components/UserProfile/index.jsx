import { UserContainer } from "./styles";
import LogOff from "../../assets/img/right-arrow.png";

function UserProfile() {
  return (
    <UserContainer>
      <img
        src="https://i.pinimg.com/originals/e4/03/de/e403de788507db2505774f48f70a8eab.png"
        alt="Foto do Usuário"
      />
      <div>
        <span>Username</span>
        <span>UserMail</span>
      </div>
      <div>
        <img src={LogOff} alt="LogOff" srcset="" />
      </div>
    </UserContainer>
  );
}

export default UserProfile;
