import { AuthState } from "@/stateManager";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const { logout } = AuthState();

  return (
    <Button
      onClick={() => {
        logout();
        console.log(`${import.meta.env.VITE_BACKEND_URL}`);
      }}
    >
      Logout
    </Button>
  );
}
