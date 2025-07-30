import { useWebSocket } from "@/types/websocketProvider";
import ChatInputWrapper from "./components/ChatInputWrapper";
import { useState } from "react";
import ChatMessagesWrapper from "./components/ChatMessagesWrapper";
import type { InChatMessageType, ReceiveMessageType } from "@/types/chat";
import { AuthState } from "@/stateManager";
import { useEffect } from "react";

import { GetChatMessages } from "@/api/chat";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ChatWindow({ id }: { id: string | undefined }) {
  if (!id) {
    return (
      <div className="text-neutral-100 flex flex-1 flex-col p-2 overflow-hidden max-h-screen">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>
      </div>
    );
  }

  const ws = useWebSocket();
  const [messages, setMessages] = useState<InChatMessageType[]>([]);
  const { userID } = AuthState();

  useEffect(() => {
    if (!userID || !id) return;
    setMessages([]);
    GetChatMessages(id, userID, setMessages);
  }, [id]);

  useEffect(() => {
    if (!ws || !userID) return;

    ws.onmessage = function (evt) {
      const data: ReceiveMessageType = JSON.parse(evt.data);
      setMessages((prev) => {
        return [
          ...prev,
          {
            text: data.message,
            stranger: data.userID !== userID,
          },
        ];
      });
    };
  }, [ws, userID]);

  if (!userID) {
    return <div></div>;
  }

  return (
    <div className="text-neutral-100 flex flex-1 flex-col p-2 overflow-hidden max-h-screen">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div>Chat: {id}</div>
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-lg p-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scroll">
          <ChatMessagesWrapper messages={messages} />
        </div>
        <ChatInputWrapper ws={ws} chatID={id} userID={userID} />
      </div>
    </div>
  );
}
