"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import React from "react";
import Image from "next/image";
import { Input } from "../../../reuses-components/input";
import { chatsStoreZustand } from "@/app/store/chats-store";
import { userStoreZustand } from "@/app/store/user-store";
interface Props {
  className?: string;
}

export const SidebarHeaderCreateDropdown: React.FC<Props> = () => {
  const token = userStoreZustand((state) => state.user.token);
  const createChat = chatsStoreZustand((state) => state.createChat);

  const [open, setOpen] = React.useState(false);

  const [textValue, setTextValue] = React.useState("");

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleCreateChat = () => {
    if (textValue.trim() !== "") {
      createChat(token, { name: textValue });
      setTextValue("");
      setOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateChat();
    }
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button>
          <Image
            width={38}
            height={38}
            alt="add-chat-icon"
            src={"/sidebar/side-bar-buttons.svg"}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[250px] bg-elemColor flex flex-col items-center border-[#313E62] rounded-[10px] p-3"
      >
        <Input
          value={textValue}
          onKeyDown={handleKeyPress}
          onChange={(e) => handleChangeInputValue(e)}
          className="text-white px-3 py-2 border-none mb-3"
          placeholder="Введите название чата"
        />
        <button
          onClick={handleCreateChat}
          type="submit"
          className="text-white w-1/2  bg-helperColor py-[5px] px-[2px] text-[18px] leading-[18px] rounded-[8px] shadow-inner shadow-[rgba(255,255,255,.4)]"
        >
          Создать
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
