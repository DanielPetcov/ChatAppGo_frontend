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

export type { ChatType, GetChatsType, ReceiveMessageType, InChatMessageType };
