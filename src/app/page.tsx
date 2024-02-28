import { ChatLayout } from "@/components/chat/chat-layout";
import bg from "../../public/black-thread-light.png";

export default function Home() {
  return (
    <main
      className="flex h-[calc(100dvh)] flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        className="z-10 border rounded-lg max-w-7xl w-full h-full text-sm lg:flex"
        style={{ backgroundColor: "white" }}
      >
        <ChatLayout />
      </div>
    </main>
  );
}
