import { useState } from "react";
import BoxInfo from "../../components/BoxInfo";
import Menu from "../../components/Menu";

function Dashboard() {
  const username = useState(
    JSON.parse(localStorage.getItem("@ethos:username")) || ""
  );

  return (
    <div>
      <Menu />
      <div>
        <h1>Dashboard</h1>
        <h2>{username}</h2>
        <BoxInfo />
      </div>
    </div>
  );
}

export default Dashboard;
