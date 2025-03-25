import React from "react";
import { SidebarContainer } from "../../reuses-components/sidebar-container";
interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = () => {
  return (
    <SidebarContainer>
      <div className="w-[292px]">Sidebar</div>
    </SidebarContainer>
  );
};
