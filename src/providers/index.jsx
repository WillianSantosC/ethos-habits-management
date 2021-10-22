import { GroupProvider } from "./Group";
import { UserProvider } from "./User";
import { AccessProvider } from "./Access";
import { HabitsProvider } from "./Habits";
import { GoalsProvider } from "./Goal";
import { ActivityProvider } from "./Activity";

function Providers({ children }) {
  return (
    <AccessProvider>
      <UserProvider>
        <GroupProvider>
          <HabitsProvider>
            <GoalsProvider>
              <ActivityProvider>{children}</ActivityProvider>
            </GoalsProvider>
          </HabitsProvider>
        </GroupProvider>
      </UserProvider>
    </AccessProvider>
  );
}

export default Providers;
