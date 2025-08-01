import { useForm } from "react-hook-form";
import type { AddChatInput } from "@/schemas/AddChatSchema";
import AddChatOnSubmit from "@/formHandlers/AddChatHandler";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";

export default function AddToChatButton({ token }: { token: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddChatInput>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarGroupAction title="Add a chat">
          <Plus />
          <span className="sr-only">Add a project</span>
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add a chat</DialogTitle>
        <form
          onSubmit={handleSubmit(AddChatOnSubmit)}
          className="flex flex-col gap-2"
        >
          <Input
            placeholder="chatID"
            {...register("id", { required: "ID can not be empty." })}
          />
          {errors.id && <span>{errors.id.message}</span>}
          <Input
            type="hidden"
            value={token}
            {...register("token", { required: true })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
