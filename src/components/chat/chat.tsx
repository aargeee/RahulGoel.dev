import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        isMobile={isMobile}
      />
    </div>
  );
}
