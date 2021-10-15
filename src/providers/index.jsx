import { GroupProvider } from "./Group";
import { UserProvider } from "./User";

function Providers({ children }) {
  return (
    <UserProvider>
      <GroupProvider>{children}</GroupProvider>
    </UserProvider>
  );
}

export default Providers;
