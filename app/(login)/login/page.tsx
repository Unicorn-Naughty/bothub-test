"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginPageModal } from "@/app/components/shared/auth-page/login-page-modal";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <LoginPageModal />
      </div>
    </>
  );
}
