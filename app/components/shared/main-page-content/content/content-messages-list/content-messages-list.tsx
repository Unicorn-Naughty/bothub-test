import React from "react";
import { ContentClientMessage } from "./content-client-message";
import { ContentAiMessage } from "./content-ai-message";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const ContentMessagesList: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cn("flex flex-col gap-4",className)}>
      <ContentClientMessage className="self-end"/>
      <ContentAiMessage className="self-start"/>
    </ul>
  );
};
