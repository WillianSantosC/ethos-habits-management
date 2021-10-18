import BoxInfo from "../../components/BoxInfo";
import Menu from "../../components/Menu";
import { DashboardContainer } from "./styles";

function Dashboard() {
  return (
    <DashboardContainer>
      <Menu />
      <div>
        <h1>Dashboard</h1>
        <BoxInfo />
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
