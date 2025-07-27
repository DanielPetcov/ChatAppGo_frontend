import type { ChatType, GetChatsType, InChatMessageType } from "@/types/chat";
import type { SetStateAction, Dispatch } from "react";

export async function GetChats(token: string): Promise<ChatType[] | undefined> {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/chat`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: GetChatsType = await res.json();
  if (data.message !== "ok") {
    return undefined;
  }

  return data.chats;
}

export function CreateChat(chatName: string, token: string) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/chat`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: chatName,
    }),
  })
    .then((res) => res.json())
    .then((data: GetChatsType) => {
      console.log(data);
    });
}

export function AddToChat(chatID: string, token: string) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/chat/user`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      chatID: chatID,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export function GetChatMessages(
  chatID: string,
  userID: string,
  setMessages: Dispatch<SetStateAction<InChatMessageType[]>>
) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/chat/messages/${chatID}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["messages"] != null && data["messages"].length > 0) {
        const returnMessages: InChatMessageType[] = [];
        for (let i = 0; i < data["messages"].length; i++) {
          let messages = {
            text: data["messages"][i]["Text"],
            stranger: userID === data["messages"][i]["Author"] ? false : true,
          };
          returnMessages.push(messages);
        }
        setMessages((prev) => [...prev, ...returnMessages]);
      }
    });
}
