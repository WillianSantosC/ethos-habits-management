import { Switch, Route } from "react-router";
import GroupGoals from "../components/GroupGoals";
import SubGroupTasks from "../components/SubGroupTasks";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route path="/groups">
        <Groups />
      </Route>

      <Route path="/allGroups/:id">
        <GroupGoals />
      </Route>

      <Route path="/subscriptions/:id">
        <SubGroupTasks />
      </Route>

      <Route path="/habits">
        <Habits />
      </Route>
    </Switch>
  );
}

export default Routes;
