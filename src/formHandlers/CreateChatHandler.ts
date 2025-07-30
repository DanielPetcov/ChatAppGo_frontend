import type { SubmitHandler } from "react-hook-form";
import type { CreateChatInput } from "@/schemas/CreateChatSchema";
import { CreateChat } from "@/api/chat";
import type { Dispatch, SetStateAction } from "react";
import type { ChatType } from "@/types/chat";

const CreateChatOnSubmit =
  (
    setChats: Dispatch<SetStateAction<ChatType[] | undefined>>,
    setOpen: Dispatch<SetStateAction<boolean>>
  ): SubmitHandler<CreateChatInput> =>
  (data) => {
    CreateChat(data.chatName, data.token, setChats, setOpen);
  };

export default CreateChatOnSubmit;
