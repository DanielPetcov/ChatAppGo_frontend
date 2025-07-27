import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
export default function SendMessageButton() {
  return (
    <Button variant={"secondary"} type={"submit"}>
      <Send />
    </Button>
  );
}
