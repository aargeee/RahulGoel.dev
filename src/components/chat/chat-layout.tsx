"use client";

import { userData } from "@/app/data";
import React, { useEffect, useState } from "react";
import { Chat } from "./chat";

export function ChatLayout() {
  const selectedUser = userData[0]
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <Chat
      messages={selectedUser.messages}
      selectedUser={selectedUser}
      isMobile={isMobile}
    />
  );
}
