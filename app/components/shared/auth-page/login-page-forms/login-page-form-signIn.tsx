"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LoginApgeFormSigInTitle } from "./login-page-form-signIn/login-apge-form-sigIn-title";
import { FormInput } from "../../reuses-components/form-input";
import { formLoginSchema, TFormLoginValues } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { userStoreZustand } from "@/app/store/user-store";

interface Props {
  className?: string;
}

export const LoginPageFormSignIN: React.FC<Props> = ({ className }) => {
  const userStore = userStoreZustand((state) => state);
  const router = useRouter();

  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      userStore.fetchUserData(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("", className)}
      >
        <LoginApgeFormSigInTitle className="mb-5" />
        <div className="flex flex-col gap-4">
          <FormInput
            autoComplete="off"
            type="text"
            placeholder="Ваш E-Mail"
            name="email"
            label="E-Mail"
          />
          <FormInput placeholder="Ваш пароль" name="password" label="Пароль" />
          <button
            type="submit"
            className="w-full bg-helperColor py-[14px] px-[18px] text-[18px] leading-[18px] rounded-[8px] shadow-inner shadow-[rgba(255,255,255,.4)]"
          >
            Войти
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
