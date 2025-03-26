"use client";
import React from "react";
import { ContentClientMessage } from "./content-client-message";
import { ContentAiMessage } from "./content-ai-message";
import { cn } from "@/lib/utils";
import { oneChatMessagesStoreZustand } from "@/app/store/one-chat-messages-store";
import ClipLoader from "react-spinners/ClipLoader";
interface Props {
  className?: string;
}

export const ContentMessagesList: React.FC<Props> = ({ className }) => {
  const {
    chatMessagePage: { data: messages },
    loading,
  } = oneChatMessagesStoreZustand((state) => state);
  console.log({ messages });

  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <ClipLoader
            color={"#1C64F2"}
            size={150}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="mt-4">Ожидаем пока вы начнете чат...</p>
        </div>
      ) : messages.length <= 0 ? (
        <p className="flex flex-col  justify-center h-full text-center">
          У вас пока что нет сообщений в этом чате. Давайте начнем общение!
        </p>
      ) : (
        messages.map((message, i) =>
          message.role === "user" ? (
            <ContentClientMessage
              message={message}
              key={i}
              className="self-end"
            />
          ) : (
            <ContentAiMessage
              message={message}
              key={i}
              className="self-start"
            />
          )
        )
      )}
    </ul>
  );
};
