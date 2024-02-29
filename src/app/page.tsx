"use client";

import ChatArea from "@/components/chat-area";
import bg from "../../public/black-thread-light.png";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
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

  return isMobile;
};

export default function Home() {
  const isMobile = useWindowWidth();

  return (
    <main
      className="flex h-[calc(100dvh)] flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        className="w-full h-full"
        // style={{ gridTemplateColumns: "1fr 80rem 1fr" }}
      >
        <ChatArea isMobile={isMobile} />
      </div>
    </main>
  );
}
