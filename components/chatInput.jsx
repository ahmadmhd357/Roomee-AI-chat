"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function ChatInput({ chatId }) {
  const model = 'text-davinci-003'
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const sendMessage = async(e)=>{
    e.preventDefault()
    if(!message){ return};
    const input = message.trim()
    setMessage('')
    const messageToSend = {
      text:message,
      createdAt:serverTimestamp(),
      user:{
        _id: session?.user?.email,
        name:session?.user?.name,
        avatar:session?.user?.image
      }
    }
    await addDoc(collection(db,'users',session?.user?.email,'chats',chatId,'messages'),
    messageToSend
    );

    const nofitacation = toast.loading('Roomee is thinking...')

    await fetch('/api/askQuestion',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        message:input, chatId,session,model
      })
    }).then(()=>{
          toast.success('here is the answer',{
            id:nofitacation
          })
    })
 
  }


  return (
    <div className="bg-gray-500/50 text-gray-300 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
        disabled={!session}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your Message..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed"
        />
        <button type="submit" disabled={!session || !message} className='bg-emerald-400 hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed' >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45 cursor-pointer " />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
