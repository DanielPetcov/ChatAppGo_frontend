import ChatItem from "./chatItem";
import { GetChats } from "@/api/chat";
import { AuthState } from "@/stateManager";
import type { ChatType } from "@/types/chat";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import CreateChatButton from "./createChatButton";
import LogoutButton from "../logout";
import AddToChatButton from "./addToChatButton";

import { Separator } from "@/components/ui/separator";

export default function ChatListWrapper({
  setCurrentChat,
}: {
  currentChat: string | undefined;
  setCurrentChat: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { token } = AuthState();
  const [loaded, setLoaded] = useState(false);
  const [chats, setChats] = useState<ChatType[] | undefined>([]);
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
    <div className="bg-neutral-300 p-5 flex flex-col gap-2 justify-between">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-2">
          <AddToChatButton token={token} />
          <CreateChatButton token={token} />
        </div>
        <Separator />
        <div className="flex flex-1 overflow-y-auto cursor-none">
          {chats && (
            <div className="flex flex-col gap-2">
              {chats.map((chat, index) => (
                <ChatItem
                  key={index}
                  id={chat.ID}
                  name={chat.Name}
                  setCurrentChat={setCurrentChat}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}
