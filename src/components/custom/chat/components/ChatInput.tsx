import { Input } from "@/components/ui/input";
import type { UseFormRegister } from "react-hook-form";
import type { ChatInputSchema } from "@/schemas/ChatInputSchema";

export default function ChatInput({
  register,
  chatID,
  userID,
}: {
  register: UseFormRegister<ChatInputSchema>;
  chatID: string;
  userID: string;
}) {
  return (
    <>
      <Input
        placeholder="enter text"
        {...register("text", { required: "can't be emtpy" })}
      />
      <Input
        type="hidden"
        value={chatID}
        {...register("chatID", { required: true })}
      />

      <Input
        type="hidden"
        value={userID}
        {...register("userID", { required: true, minLength: 2 })}
      />
    </>
  );
}
