"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LogOut() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session)
    return (
      <div
        onClick={() => signOut()}
        className="flex text-white justify-center items-center gap-2"
      >
        <img
          src={session.user.image}
          alt="profile pic"
          className="h-16 w-16 rounded-full "
        />
        <p className="cursor-pointer hover:opacity-50 font-medium">Log out</p>
      </div>
    );
}

export default LogOut;
