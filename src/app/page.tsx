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
              <h3 className="uppercase">CONTENTS</h3>
              {/* <a href="mailto:miranda@yourcompany.com?bcc=eventsteam@yourcompany.com&subject=Excited%20to%20meet%20at%20the%20event!&body=Hi%20Miranda">mail</a> */}
              <ul>
                <li className="text-sm text-gray-600 pl-3 hover:text-base hover:text-black transition-[font-size]">INTRO</li>
                <li className="text-sm text-gray-600 pl-3 hover:text-base hover:text-black transition-[font-size]">INTRO</li>
                <li className="text-sm text-gray-600 pl-3 hover:text-base hover:text-black transition-[font-size]">INTRO</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
