import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { RemoveUserFromChat } from "@/api/chat";
import type { Dispatch, SetStateAction } from "react";
import type { ChatType } from "@/types/chat";

export default function DeleteChatButton({
  chatID,
  token,
  userID,
  setChats,
}: {
  chatID: string;
  token: string;
  userID: string;
  setChats: Dispatch<SetStateAction<ChatType[] | undefined>>;
}) {
  return (
    <DropdownMenuItem
      onClick={() => RemoveUserFromChat(chatID, token, userID, setChats)}
    >
      <span>Delete Project</span>
    </DropdownMenuItem>
  );
}
