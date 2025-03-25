import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  messagesPage?: boolean;
  placeholder: string;
}

export const Input: React.FC<Props> = ({
  messagesPage,
  placeholder,
  className,
  ...props
}) => {
  return (
    <label className="relative">
      <input
        {...props}
        className={cn(
          "w-full placeholder:helperTextColor bg-transparent border-aiBgColor border",
          className
        )}
        placeholder={placeholder}
      />
      {messagesPage && (
        <button className="absolute right-[20px] top-0 bottom-0 w-[38px] flex items-center justify-center">
          <Image
            alt="send-icon"
            width={38}
            height={38}
            src={"/messages/button.svg"}
          />
        </button>
      )}
    </label>
  );
};
