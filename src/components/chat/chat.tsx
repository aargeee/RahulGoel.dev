import { MessageSection, UserData } from "../../../data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";

interface ChatProps {
  sections?: MessageSection[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ sections, selectedUser, isMobile }: ChatProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        sections={sections}
        selectedUser={selectedUser}
        isMobile={isMobile}
      />
    </div>
  );
}
