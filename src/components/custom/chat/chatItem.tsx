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
import type { ChatType, CurrentChat } from "@/types/chat";
export default function ChatItem({
  id,
  name,
  openSidebar,
  setOpenSidebarMobile,
  currentChat,
  setCurrentChat,
  setChats,
}: {
  id: string;
  name: string;
  openSidebar: boolean;
  setOpenSidebarMobile: (open: boolean) => void;
  currentChat: CurrentChat | undefined;
  setCurrentChat: Dispatch<SetStateAction<CurrentChat | undefined>>;
  setChats: Dispatch<SetStateAction<ChatType[] | undefined>>;
}) {
  if (!openSidebar) {
    return (
      <div
        className=" cursor-pointer"
        onClick={() =>
          setCurrentChat({
            id: id,
            name: name,
          })
        }
      >
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
        style={{ opacity: currentChat?.id === id ? "100%" : "50%" }}
        onClick={() => {
          setCurrentChat({
            id: id,
            name: name,
          });
          setOpenSidebarMobile(false);
        }}
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
