import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LoginApgeFormSigInTitle: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("flex justify-between",className)}>
      <h1 className="font-bold text-[22px] leading-[29px]">Авторизация</h1>
      <button type="button" className="size-6">
        <X className="text-helperTextColor" />
      </button>
    </div>
  );
};
