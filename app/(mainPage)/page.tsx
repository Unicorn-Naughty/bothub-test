"use client";
import React from "react";
import { Header } from "@/app/components/shared/header-750-px/header";
import { Content } from "@/app/components/shared/main-page-content/content/content";
import { Sidebar } from "@/app/components/shared/main-page-content/sidebar/sidebar";
import { useAuth } from "../hooks/use-auth";
import { cn } from "@/lib/utils";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const isAuthenticated = useAuth();


  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center  h-[calc(100vh-32px)]">
        <ClipLoader
          color={"#1C64F2"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div>
      <Header className="mb-5" />
      <div className={cn("flex gap-4 h-[calc(100vh-32px)]")}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
