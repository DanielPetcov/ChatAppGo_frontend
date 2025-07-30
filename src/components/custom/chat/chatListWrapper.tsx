import ChatItem from "./chatItem";
import { GetChats } from "@/api/chat";
import { AuthState } from "@/stateManager";
import type { ChatType } from "@/types/chat";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import CreateChatButton from "./createChatButton";
import LogoutButton from "../logout";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";

export default function ChatListWrapper({
  currentChat,
  setCurrentChat,
}: {
  currentChat: string | undefined;
  setCurrentChat: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { token, userName } = AuthState();
  const [loaded, setLoaded] = useState(false);
  const [chats, setChats] = useState<ChatType[] | undefined>([]);
  const { open } = useSidebar();

  useEffect(() => {
    if (!token || token == "") return;

    const fetchChats = async (token: string) => {
      let localChats = await GetChats(token);
      setChats(localChats);
      setLoaded(true);
    };

    fetchChats(token);
  }, [token]);

  if (!loaded || !token) {
    return;
  }

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <CreateChatButton token={token} />
          <SidebarGroupContent>
            <SidebarMenu>
              {chats &&
                chats.map((chat, index) => (
                  <SidebarMenuItem key={chat.ID}>
                    <ChatItem
                      key={index}
                      id={chat.ID}
                      name={chat.Name}
                      openSidebar={open}
                      currentChat={currentChat}
                      setCurrentChat={setCurrentChat}
                      setChats={setChats}
                    />
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> <span>{userName ? userName : "User"}</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                sideOffset={4}
                className="w-[var(--radix-popper-anchor-width)]"
              >
                <LogoutButton />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
