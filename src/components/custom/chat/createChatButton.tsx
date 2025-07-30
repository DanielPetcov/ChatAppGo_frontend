import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateChatOnSubmit from "@/formHandlers/CreateChatHandler";
import { useForm } from "react-hook-form";
import type { CreateChatInput } from "@/schemas/CreateChatSchema";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { ChatType } from "@/types/chat";

export default function CreateChatButton({
  token,
  setChats,
}: {
  token: string;
  setChats: Dispatch<SetStateAction<ChatType[] | undefined>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChatInput>();

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarGroupAction>
          <Plus />
          <span className="sr-only">Create a chat</span>
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create a new chat</DialogTitle>
        <form
          onSubmit={handleSubmit(CreateChatOnSubmit(setChats, setOpen))}
          className="flex flex-col gap-2"
        >
          <Input
            placeholder="chat name"
            {...register("chatName", { required: "chat name required" })}
          />
          {errors.chatName && <div>{errors.chatName.message}</div>}
          <Input
            value={token}
            type="hidden"
            {...register("token", { required: true })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
