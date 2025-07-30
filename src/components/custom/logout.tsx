import { AuthState } from "@/stateManager";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export default function LogoutButton() {
  const { logout } = AuthState();

  return (
    <DropdownMenuItem
      onClick={() => {
        logout();
      }}
    >
      Logout
    </DropdownMenuItem>
  );
}
