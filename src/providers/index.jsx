import { GroupProvider } from "./Group";
import { UserProvider } from "./User";
import { AccessProvider } from "./Access";
function Providers({ children }) {
  return (
    <AccessProvider>
      <UserProvider>
        <GroupProvider>{children}</GroupProvider>
      </UserProvider>
    </AccessProvider>
  );
}

export default Providers;
