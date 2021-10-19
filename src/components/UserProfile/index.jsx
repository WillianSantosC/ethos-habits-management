import { UserContainer } from "./styles";

function UserProfile() {
  return (
    <UserContainer>
      <img
        src="https://i.pinimg.com/originals/e4/03/de/e403de788507db2505774f48f70a8eab.png"
        alt="Foto do Usuário"
      />
      <div>
        <h3>Username</h3>
        <span>UserMail</span>
      </div>
    </UserContainer>
  );
}

export default UserProfile;
