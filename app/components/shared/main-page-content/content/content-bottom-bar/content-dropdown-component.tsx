import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Skeleton } from "@/app/components/ui/skeleton";
import { aiModelsStoreZustand } from "@/app/store/ai-models-store";
import { cn } from "@/lib/utils";
import { ModelEntity } from "@/types/ModelEntity";
import Image from "next/image";

interface Props {
  className?: string;
}

export const ContentDropdownComponent: React.FC<Props> = () => {
  const { models, loading, setCurrentModel, currentModel } =
    aiModelsStoreZustand((state) => state);
  const cuttedModels = models.slice(0, 10);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (models.length > 0) {
      setCurrentModel(cuttedModels[0]);
    }
  }, [models]);

  const handleTestItemClick = (item: ModelEntity) => {
    setCurrentModel(item);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="backdrop-blur-lg flex items-center gap-2.5 py-2.5 px-4 border-aiBgColor border rounded-[10px]">
          <Image
            src={"/messages/gptIcon.svg"}
            width={18}
            height={18}
            alt="ai-icon"
          />
          {loading ? (
            <Skeleton className="w-[100px] h-[30px]" />
          ) : (
            <span>{currentModel.label}</span>
          )}
          <Image
            className={cn(
              "transition-transform duration-300",
              open ? "rotate-180" : "rotate-0"
            )}
            src={"/messages/arrow-down.svg"}
            alt="chevron-down"
            width={16}
            height={16}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[272px] bg-transparent border-[#313E62] flex flex-col gap-2 rounded-[10px] backdrop-blur-lg "
      >
        {cuttedModels.map((model, i) => (
          <div
            onClick={() => handleTestItemClick(model)}
            className={cn(
              "flex gap-2.5 text-white rounded-[8px] p-3 cursor-pointer transition-colors hover:bg-[#3b4a72]",
              model.label && "bg-aiBgColor"
            )}
            key={i}
          >
            <Image
              src={"/messages/gptIcon.svg"}
              width={18}
              height={18}
              alt="ai-icon"
            />
            <span>{model.label}</span>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
