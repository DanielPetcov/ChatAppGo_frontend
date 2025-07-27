import type { SubmitHandler, UseFormReset } from "react-hook-form";
import type { ChatInputSchema } from "@/schemas/ChatInputSchema";

const SendMessageHandler =
  (
    ws: WebSocket | null,
    reset: UseFormReset<ChatInputSchema>
  ): SubmitHandler<ChatInputSchema> =>
  (data) => {
    ws?.send(
      JSON.stringify({
        message: data.text,
        chatID: data.chatID,
        userID: data.userID,
      })
    );
    reset();
  };

export default SendMessageHandler;
