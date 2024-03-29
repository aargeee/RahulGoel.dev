"use client";

import { userData } from "../../../data";
import React, { useEffect, useState } from "react";
import { Chat } from "./chat";

export function ChatLayout({ isMobile }: { isMobile: boolean }) {
  const selectedUser = userData[0];

  return (
    <Chat
      sections={selectedUser.sections}
      selectedUser={selectedUser}
      isMobile={isMobile}
    />
  );
}
