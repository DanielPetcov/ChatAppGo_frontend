import ChatListWrapper from "@/components/custom/chat/chatListWrapper";
import { ChatWindow } from "@/components/custom/chat/chatWindow";
import { useState } from "react";

function Home() {
  const [currentChat, setCurrentChat] = useState<string | undefined>(undefined);

  return (
    <div className="font-inter w-full min-h-screen grid grid-cols-[auto_1fr] bg-neutral-900">
      <ChatListWrapper
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
      <ChatWindow id={currentChat} />
    </div>
  );
}

export default Home;
