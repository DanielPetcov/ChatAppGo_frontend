import SendMessageButton from "./SendMessageButton";
import { useForm } from "react-hook-form";
import type { ChatInputSchema } from "@/schemas/ChatInputSchema";
import ChatInput from "./ChatInput";
import SendMessageHandler from "@/formHandlers/SendMessageHandler";

export default function ChatInputWrapper({
  ws,
  chatID,
  userID,
}: {
  ws: WebSocket | null;
  chatID: string;
  userID: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChatInputSchema>();

  return (
    <form onSubmit={handleSubmit(SendMessageHandler(ws, reset))}>
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <ChatInput register={register} chatID={chatID} userID={userID} />
        <SendMessageButton />
      </div>
    </form>
  );
}
