import { MessageSection, UserData } from "@/app/data";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

interface ChatListProps {
  sections?: MessageSection[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function ChatList({ sections, selectedUser, isMobile }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ScrollToHere();
  }, []);

  const ScrollToHere = () => {
    messagesContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
        <ScrollArea>
          <AnimatePresence>
            {sections?.map((section, index) => {
              return (
                <div key={index}>
                  <div className="py-3" ref={messagesContainerRef}>
                    <Separator
                      className="flex justify-center items-center w-11/12 m-auto"
                      label={
                        <p className="px-1 bg-white text-border uppercase">
                          {section.title}
                        </p>
                      }
                    />
                  </div>
                  {section.messages?.map((message, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                      transition={{
                        opacity: { duration: 0.1 },
                        layout: {
                          type: "spring",
                          bounce: 0.3,
                          duration:
                            section.messages.indexOf(message) * 0.05 + 0.2,
                        },
                      }}
                      style={{
                        originX: 0.5,
                        originY: 0.5,
                      }}
                      className={cn(
                        "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                        message.name !== selectedUser.name
                          ? "items-end"
                          : "items-start"
                      )}
                    >
                      <div className="flex gap-3 items-start">
                        {message.name === selectedUser.name && (
                          <Avatar className="flex justify-center items-center">
                            <AvatarImage
                              src={message.avatar}
                              alt={message.name}
                              width={4}
                              height={4}
                            />
                          </Avatar>
                        )}
                        <span className={`bg-accent p-3 rounded-md max-w-3xl ${(message.name === selectedUser.name) ? "" : "bg-blue-50"}`}>
                          {message.message}
                        </span>
                        {message.name !== selectedUser.name && (
                          <Avatar className="flex justify-center items-center">
                            <AvatarImage
                              src={message.avatar}
                              alt={message.name}
                              width={4}
                              height={4}
                            />
                          </Avatar>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </AnimatePresence>
        </ScrollArea>
      </div>

      <ChatBottombar isMobile={isMobile} />
    </div>
  );
}
