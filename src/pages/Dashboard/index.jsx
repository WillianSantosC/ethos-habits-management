import { useContext, useState } from "react";
import { Redirect } from "react-router";
import BoxInfo from "../../components/BoxInfo";
import Menu from "../../components/Menu";
import { AccessContext } from "../../providers/Access";
import { BoxInfoContainer, DashboardContainer } from "./styles";

function Dashboard() {
  const username = useState(
    JSON.parse(localStorage.getItem("@ethos:username")) || ""
  );
  const { authenticated } = useContext(AccessContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <DashboardContainer>
      <Menu />
      <BoxInfoContainer>
        <h1>Dashboard</h1>
        <h2>{username}</h2>
        <BoxInfo />
      </BoxInfoContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
