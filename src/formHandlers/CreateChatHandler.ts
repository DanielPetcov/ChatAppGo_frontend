import type { SubmitHandler } from "react-hook-form";
import type { CreateChatInput } from "@/schemas/CreateChatSchema";
import { CreateChat } from "@/api/chat";

const CreateChatOnSubmit: SubmitHandler<CreateChatInput> = (data) => {
  CreateChat(data.chatName, data.token);
};

export default CreateChatOnSubmit;
