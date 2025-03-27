"use client";
import { sideBarStateStore } from "@/app/store/sidebar-state-store";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React from "react";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const {  changeStateOpen } = sideBarStateStore((state) => state);
  return (
    <header className={cn("p-5 bg-elemColor rounded-[20px] hidden max-[750px]:block", className)}>
      <button onClick={changeStateOpen}>
        <Menu />
      </button>
    </header>
  );
};
