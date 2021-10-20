import { useState } from "react";
import BoxInfo from "../../components/BoxInfo";
import Menu from "../../components/Menu";
import { BoxInfoContainer, DashboardContainer } from "./styles";

function Dashboard() {
  const username = useState(
    JSON.parse(localStorage.getItem("@ethos:username")) || ""
  );

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
