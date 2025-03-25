import React from "react";
import { ContentMessagesList } from "./content-messages-list/content-messages-list";
import { ContentBottomBar } from "./content-bottom-bar/content-bottom-bar";
import { ContentContainer } from "../../reuses-components/content-container";

interface Props {
  className?: string;
}

export const Content: React.FC<Props> = () => {
  return (
    <ContentContainer className="flex-grow">
      <ContentMessagesList className="flex-grow overflow-hidden overflow-y-auto" />
      <ContentBottomBar className="h-[120px] mt-5" />
    </ContentContainer>
  );
};
