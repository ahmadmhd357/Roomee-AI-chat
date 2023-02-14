'use client'
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import ChatRow from './ChatRow';

function Chats() {
    const { data: session } = useSession();
    const [chats,loading, error ] = useCollection(
      session && query (collection(db,'users' , session.user.email, 'chats'),
      orderBy("createdAt", "desc")
      )
    )
  
  return (
    <div className='text-gray-400 pt-4'>
      {loading && <div className='animate-pulse text-center text-white'>
        <p>Loading Chats...</p>
        </div>}
      {chats?.docs.map((chat)=>(
        <ChatRow key={chat.id} id={chat.id} />
      ))}
    </div>
  )
}

export default Chats