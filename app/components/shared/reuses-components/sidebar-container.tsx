"use client";
import { sideBarStateStore } from "@/app/store/sidebar-state-store";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const SidebarContainer: React.FC<Props> = ({ children }) => {
  const { open, changeStateClose } = sideBarStateStore((state) => state);
  const ref = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useClickAway(ref, () => {
    if (open) {
      changeStateClose();
    }
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: isMobile ? "-100%" : 0 }}
      animate={{ x: open && isMobile ? 0 : isMobile ? "-100%" : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "px-4 py-5 block bg-elemColor max-[750px]:hidden rounded-[18px]",
        open &&
          isMobile &&
          "max-[750px]:block max-[750px]:absolute z-50 top-[110px] left-[16px] bottom-0"
      )}
    >
      <aside ref={ref} className="w-[292px] flex flex-col h-full">
        {children}
      </aside>
    </motion.div>
  );
};
