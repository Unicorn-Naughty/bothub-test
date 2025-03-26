import { cn } from "@/lib/utils";
import React from "react";
import { LoginPageFormSignIN } from "./login-page-forms/login-page-form-signIn";
interface Props {
  className?: string;
}

export const LoginPageModal: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[460px] bg-aiBgColor border border-borderColor rounded-[16px] p-5",
        className
      )}
    >
      <LoginPageFormSignIN />
    </div>
  );
};
