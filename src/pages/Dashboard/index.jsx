import { useState } from "react";
import BoxInfo from "../../components/BoxInfo";
import Menu from "../../components/Menu";
import { DashboardContainer } from "./styles";

function Dashboard() {
  const username = useState(
    JSON.parse(localStorage.getItem("@ethos:username")) || ""
  );

  return (
    <DashboardContainer>
      <Menu />
      <div>
        <h1>Dashboard</h1>
        <h2>{username}</h2>
        <BoxInfo />
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
