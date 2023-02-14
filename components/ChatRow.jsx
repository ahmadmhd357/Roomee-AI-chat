import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatRow({ id }) {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection( query(collection(db, "users", session?.user?.email, "chats", id, "messages"),
  orderBy('createdAt','asc')
  )
    
  );
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email, "chats", id));
    router.replace("/");
  };

  useEffect(() => {
    if (!pathName) return;
    setActive(pathName.includes(id));
  }, [pathName]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`rounded-lg p-2 my-2 flex gap-4 justify-center items-center py-2 hover:bg-gray-600 ${
        active && "bg-gray-500/50"
      }`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-400 hover:text-red-600 "
      />
    </Link>
  );
}

export default ChatRow;
