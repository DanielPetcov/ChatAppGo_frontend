import { AddToChat } from "@/api/chat";
import type { AddChatInput } from "@/schemas/AddChatSchema";
import type { SubmitHandler } from "react-hook-form";

const AddChatOnSubmit: SubmitHandler<AddChatInput> = (data) => {
  AddToChat(data.id, data.token);
};

export default AddChatOnSubmit;
