"use client";
import { copyMessageText } from "@/lib/copy-message-text";
import { getMessageTime } from "@/lib/get-message-time";
import { cn } from "@/lib/utils";
import { MessageEntity } from "@/types/MessageEntity";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface Props {
  className?: string;
  message: MessageEntity;
}

export const ContentAiMessage: React.FC<Props> = ({ className, message }) => {
  const [accumulatedText, setAccumulatedText] = useState("");

  useEffect(() => {
    if (Array.isArray(message.content)) {
      const completeText = message.content.join("");
      setAccumulatedText(completeText);
    } else {
      setAccumulatedText(message.content || "");
    }
  }, [message.content]);

  const handleCopy = () => {
    if (accumulatedText) copyMessageText(accumulatedText);
  };

  const time = getMessageTime(message.created_at);
  const label = message.model?.parent?.label
    ? message.model?.parent?.label
    : "";
  const sanitizedText = DOMPurify.sanitize(accumulatedText);

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
            {label ? label : "label_name"}
          </figcaption>
          <span className="text-[14px] leading-[18px] bg-aiBgColor px-3 py-1 rounded-[14px]">
            {message.model_id ? message.model_id : "model_id"}
          </span>
        </figure>
        <blockquote>
          <p
            dangerouslySetInnerHTML={{ __html: sanitizedText }}
            className="mb-2 text-[18px]"
          ></p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[14px]">
              <span className="uppercase text-[16px] text-capsColor leading-[22px]">
                {message.tokens ? `-${message.tokens} CAPS` : ""}
              </span>
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
