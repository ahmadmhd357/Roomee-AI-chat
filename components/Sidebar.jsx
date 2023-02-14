"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Chats from "./Chats";
import LogOut from "./LogOut";
import NewChat from "./NewChat";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Bars3Icon
        onClick={() => setOpen(!open)}
        className="w-8 h-8 text-white absolute  sm:hidden"
      />
      <div
        className={
          open
            ? "p-4 flex flex-col pt-20 h-screen bg-gray-900 "
            : "sm:p-4 sm:flex flex-col max-w-xs overflow-y-auto md:min-w-[20rem] bg-gray-900 h-screen hidden"
        }
      >
        <div className="flex-1 ">
          <NewChat />
          <Chats />
        </div>
        <LogOut />
      </div>
    </>
  );
}

export default Sidebar;
