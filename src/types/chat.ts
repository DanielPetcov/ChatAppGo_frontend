type ChatType = {
  ID: string;
  Name: string;
  AuthorID: string;
};

type GetChatsType = {
  message: string;
  chats: ChatType[];
};

type ReceiveMessageType = {
  message: string;
  chatID: string;
  userID: string;
};

type InChatMessageType = {
  text: string;
  stranger: boolean;
};

type CurrentChat = {
  id: string;
  name: string;
};

export type {
  ChatType,
  GetChatsType,
  ReceiveMessageType,
  InChatMessageType,
  CurrentChat,
};
