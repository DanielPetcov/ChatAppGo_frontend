import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateChatOnSubmit from "@/formHandlers/CreateChatHandler";
import { useForm } from "react-hook-form";
import type { CreateChatInput } from "@/schemas/CreateChatSchema";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function CreateChatButton({ token }: { token: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChatInput>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Create a chat</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create a new chat</DialogTitle>
        <form
          onSubmit={handleSubmit(CreateChatOnSubmit)}
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
