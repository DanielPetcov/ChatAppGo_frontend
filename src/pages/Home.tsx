import ChatListWrapper from "@/components/custom/chat/chatListWrapper";
import { ChatWindow } from "@/components/custom/chat/chatWindow";
import { useState } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import type { CurrentChat } from "@/types/chat";

function Home() {
  const [currentChat, setCurrentChat] = useState<CurrentChat | undefined>(
    undefined
  );

  return (
    <div className="font-inter w-full min-h-screen bg-neutral-900">
      <SidebarProvider defaultOpen={true}>
        <ChatListWrapper
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
        <ChatWindow currentChat={currentChat} />
      </SidebarProvider>
    </div>
  );
}

export default Home;
