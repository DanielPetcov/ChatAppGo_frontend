import type { ChatType, GetChatsType } from "@/types/chat";

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
