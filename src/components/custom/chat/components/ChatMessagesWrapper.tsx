import type { InChatMessageType } from "@/types/chat";
import ChatMessage from "./chatMessage";

export default function ChatMessagesWrapper({
  messages,
}: {
  messages: InChatMessageType[];
}) {
  if (messages.length === 0) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-2 bg-neutral-700 rounded-md p-5">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          text={message.text}
          stranger={message.stranger}
        />
      ))}
    </div>
  );
}
