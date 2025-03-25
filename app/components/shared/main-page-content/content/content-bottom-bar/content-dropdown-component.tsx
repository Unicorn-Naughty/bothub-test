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

export const ContentDropdownComponent: React.FC<Props> = () => {
  const [testItem, setTestItem] = React.useState({
    icon: "/messages/gptIcon.svg",
    name: "ChatGPT",
  });
  const [open, setOpen] = React.useState(false);
  const testItems = [
    {
      icon: "/messages/gptIcon.svg",
      name: "ChatGPT",
    },
    {
      icon: "/messages/gptIcon.svg",
      name: "DALL-E",
    },
    {
      icon: "/messages/gptIcon.svg",
      name: "Midjourney",
    },
  ];
  const handleTestItemClick = (item: { icon: string; name: string }) => {
    setTestItem(item);
    setOpen(false);
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="backdrop-blur-lg flex items-center gap-2.5 py-2.5 px-4 border-aiBgColor border rounded-[10px]">
          <Image src={testItem.icon} width={18} height={18} alt="ai-icon" />
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
        align="start"
        className="w-[272px] bg-transparent border-[#313E62] rounded-[10px] backdrop-blur-lg"
      >
        {testItems.map((item, i) => (
          <div
            onClick={() => handleTestItemClick(item)}
            className={cn(
              "flex gap-2.5 text-white p-3 rounded-[8px]",
              testItem.name === item.name && "bg-aiBgColor"
            )}
            key={i}
          >
            <Image src={item.icon} width={18} height={18} alt="ai-icon" />
            <span>{item.name}</span>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
