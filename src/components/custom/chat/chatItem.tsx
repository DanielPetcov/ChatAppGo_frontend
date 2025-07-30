import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SidebarMenuAction, SidebarMenuButton } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import DeleteChatButton from "./deleteChatButton";
import { AuthState } from "@/stateManager";
import type { ChatType } from "@/types/chat";
export default function ChatItem({
  id,
  name,
  openSidebar,
  currentChat,
  setCurrentChat,
  setChats,
}: {
  id: string;
  name: string;
  openSidebar: boolean;
  currentChat: string | undefined;
  setCurrentChat: Dispatch<SetStateAction<string | undefined>>;
  setChats: Dispatch<SetStateAction<ChatType[] | undefined>>;
}) {
  if (!openSidebar) {
    return (
      <div className=" cursor-pointer" onClick={() => setCurrentChat(id)}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  const { token, userID } = AuthState();

  return (
    <>
      <SidebarMenuButton
        style={{ opacity: currentChat === id ? "100%" : "50%" }}
        onClick={() => setCurrentChat(id)}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{name}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="center">
          <DeleteChatButton
            chatID={id}
            token={token ? token : ""}
            userID={userID ? userID : ""}
            setChats={setChats}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
