import Chat from "@/components/Chat"
import ChatInput from "@/components/chatInput"


function ChatPage({params:{id}}) {
    
  return (
    <div className="flex h-screen overflow-hidden flex-col">
       <Chat chatId={id}/>
       <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage