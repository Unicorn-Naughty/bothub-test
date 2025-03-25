import React from "react";

import { SidebarHeaderTitle } from "./sidebar-header-title";
import { SidebarHeaderButtons } from "./sidebar-header-buttons";
interface Props {
  className?: string;
}

export const SidebarHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SidebarHeaderTitle className="mb-5" />
      <SidebarHeaderButtons />
    </div>
  );
};
