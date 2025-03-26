"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

export const DropdownLanguage: React.FC<Props> = () => {
  const [testItem, setTestItem] = React.useState({
    name: "ru",
  });
  const [open, setOpen] = React.useState(false);
  const testItems = [
    {
      name: "ru",
    },
    {
      name: "en",
    },
  ];
  const handleTestItemClick = (item: { name: string }) => {
    setTestItem(item);
    setOpen(false);
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="uppercase flex items-center gap-1 py-1 px-4 ">
          <Image
            src={"/sidebar/lang.svg"}
            alt="lang-icon"
            width={18}
            height={18}
          />
          <span>{testItem.name}</span>
          <Image
            src={"/messages/arrow-down.svg"}
            alt="chevron-down"
            width={16}
            height={16}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="max-w-[68px] w-[68px] bg-elemColor border-[#313E62] rounded-[10px] "
      >
        {testItems.map((item, i) => (
          <div
            onClick={() => handleTestItemClick(item)}
            className={cn(
              " text-white p-2 rounded-[8px] cursor-pointer",
              testItem.name === item.name && "bg-aiBgColor"
            )}
            key={i}
          >
            <span className="uppercase">{item.name}</span>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
