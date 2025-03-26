"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { userStoreZustand } from "@/app/store/user-store";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const SidebarUser: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const user = userStoreZustand((state) => state.user);
  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };
  const number = 9012;
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <figure className="gap-3 flex items-center">
        <div className=" w-10 h-10 p-0.5 rounded-full bg-gradient-to-r from-[#1C64F2] to-[#D41CF2]">
          <Image
            className=""
            src={"/messages/user.svg"}
            alt="user-icon"
            width={40}
            height={40}
          />
        </div>
        <div>
          <figcaption>{user.email}</figcaption>
          <div className="uppercase">{number.toLocaleString("ru")} tkn</div>
        </div>
      </figure>
      <button onClick={handleLogout}>
        <Image
          className=""
          width={18}
          height={18}
          alt="logout-icon"
          src={"/sidebar/logout.svg"}
        />
      </button>
    </div>
  );
};
