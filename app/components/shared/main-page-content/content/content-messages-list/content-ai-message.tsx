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

export const ContentAiMessage: React.FC<Props> = ({ className, message }) => {
  const handleCopy = () => {
    copyMessageText(message.content);
  };

  const time = getMessageTime(message.created_at);

  return (
    <li className={cn("flex items-center gap-4", className)}>
      <Image
        src={"/messages/gptIcon.svg"}
        alt="ai-icon"
        width={40}
        height={40}
        className="min-w-10 "
      />
      <div className="mb-2">
        <figure className="flex gap-2.5">
          <figcaption className="text-[16px] leading-[22px]">
            {message.model_id}
          </figcaption>
          <span className="text-[14px] leading-[18px] bg-aiBgColor px-3 py-1 rounded-[14px]">
            {message.tg_bot_message_id}
          </span>
        </figure>
        <blockquote>
          <p className="mb-2 text-[18px]">{message.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[14px]">
              <span className="uppercase text-[16px] text-capsColor leading-[22px]">{`${message.tokens} CAPS`}</span>
              <button onClick={handleCopy} className="min-w-[18px]">
                <Image
                  alt="copy-icon"
                  src={"/messages/copy.svg"}
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <time className="text-[12px]">{time}</time>
          </div>
        </blockquote>
      </div>
    </li>
  );
};
