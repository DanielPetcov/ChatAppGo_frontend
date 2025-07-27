export default function ChatMessage({
  text,
  stranger,
}: {
  text: string;
  stranger: boolean;
}) {
  if (stranger) {
    return (
      <div className="flex w-full justify-start">
        <div className="p-2 bg-white rounded-lg text-wrap max-w-[100px]">
          <div className="text-neutral-900">{text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-end">
      <div className="p-2 bg-white rounded-lg text-wrap max-w-[100px]">
        <div className="text-neutral-900">{text}</div>
      </div>
    </div>
  );
}
