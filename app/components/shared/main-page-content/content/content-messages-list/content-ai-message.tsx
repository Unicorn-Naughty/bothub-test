import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

export const ContentAiMessage: React.FC<Props> = ({ className }) => {
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
          <figcaption className="text-[16px] leading-[22px]">ChatGPT</figcaption>
          <span className="text-[14px] leading-[18px] bg-aiBgColor px-3 py-1 rounded-[14px]">gpt-3.5-turbo</span>
        </figure>
        <blockquote>
          <p className="mb-2 text-[18px]">Привет! Чем я могу помочь?</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[14px]">
              <span className="uppercase text-[16px] text-capsColor leading-[22px]">-223 CAPS</span>
              <button className="min-w-[18px]">
                <Image alt="copy-icon" src={"/messages/copy.svg"} width={18} height={18}/>
              </button>
            </div>
            <time className="text-[12px]">09:54</time>
          </div>
        </blockquote>
      </div>
    </li>
  );
};
