import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Dispatch, SetStateAction } from "react";
export default function ChatItem({
  id,
  name,
  setCurrentChat,
}: {
  id: string;
  name: string;
  setCurrentChat: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <div
      className="flex items-center gap-2 p-2 rounded-lg bg-neutral-800 text-neutral-200 cursor-pointer"
      onClick={() => setCurrentChat(id)}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>{name}</div>
    </div>
  );
}
