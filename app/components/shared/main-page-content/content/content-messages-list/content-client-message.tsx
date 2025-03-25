import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

export const ContentClientMessage: React.FC<Props> = ({ className }) => {
  return (
    <li className={cn("list-none flex items-end gap-2.5", className)}>
      <button className="min-w-[18px]">
        <Image
          alt="copy-icon"
          src={"/messages/copy.svg"}
          width={18}
          height={18}
        />
      </button>
      <blockquote className="bg-clientMessageColor relative rounded-[10px] p-4 pr-0 rounded-br-none text-pretty">
        <p className="text-[18px] min-w-[164px]">Привет бот</p>
        <time className="text-[12px] absolute bottom-1 right-2">09:54</time>
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
