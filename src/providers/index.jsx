import { GroupProvider } from "./Group";
import { UserProvider } from "./User";
import { AccessProvider } from "./Access";
import { HabitsProvider } from "./Habits";
function Providers({ children }) {
  return (
    <AccessProvider>
      <UserProvider>
        <GroupProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </GroupProvider>
      </UserProvider>
    </AccessProvider>
  );
}

export default Providers;
