import { AuthState } from "@/stateManager";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const { logout } = AuthState();

  return (
    <Button
      variant={"secondary"}
      onClick={() => {
        logout();
      }}
    >
      Logout
    </Button>
  );
}
