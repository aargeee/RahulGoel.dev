import { ChatLayout } from "@/components/chat/chat-layout";

export default function ChatArea({isMobile}:{isMobile: boolean;}) {
  return (
    <div className="z-10 border rounded-lg max-w-7xl w-full h-full text-sm lg:flex bg-white m-auto">
      <ChatLayout isMobile={isMobile} />
    </div>
  );
}
