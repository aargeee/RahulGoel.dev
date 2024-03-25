"use client";

import ChatArea from "@/components/chat-area";
import bg from "../../public/black-thread-light.png";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Home() {
  const isMobile = useWindowWidth();

  return (

    <main
      className="flex h-[calc(100dvh)] flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* <ServerMessage /> */}
      <div
        className="w-full h-full relative"
        // style={{ gridTemplateColumns: "1fr 80rem 1fr" }}
      >
        {!isMobile && (
          <div className="filler fixed top-0 w-[calc((100%-80rem)/2)] left-0 h-full hidden xl:block"></div>
        )}
        <div className="wrapper h-full">
          <ChatArea isMobile={isMobile} />
        </div>
        {!isMobile && (
          <div className="filler fixed top-0 w-[calc((100%-80rem)/2)] right-0 h-full hidden 2xl:block">
            <div className="p-3 w-full h-full cursor-default">
              
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
