import { copyMessageText } from "@/lib/copy-message-text";
import { getMessageTime } from "@/lib/get-message-time";
import { cn } from "@/lib/utils";
import { MessageEntity } from "@/types/MessageEntity";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
  message: MessageEntity;
}

export const ContentClientMessage: React.FC<Props> = ({
  className,
  message,
}) => {

  const handleCopy = () => {
    copyMessageText(message.content);
  };

  const time = getMessageTime(message.created_at);
  
  return (
    <li className={cn("list-none flex items-end gap-2.5", className)}>
      <button onClick={handleCopy} className="min-w-[18px]">
        <Image
          alt="copy-icon"
          src={"/messages/copy.svg"}
          width={18}
          height={18}
        />
      </button>
      <blockquote className="bg-clientMessageColor relative rounded-[10px] p-4 pr-0 rounded-br-none text-pretty">
        <p className="text-[18px] min-w-[164px]">{message.content}</p>
        <time className="text-[12px] absolute bottom-1 right-2">{time}</time>
      </blockquote>
      <figure className="min-w-10">
        <Image
          alt="use-img"
          src={"/messages/user.svg"}
          width={40}
          height={40}
        />
      </figure>
    </li>
  );
};
