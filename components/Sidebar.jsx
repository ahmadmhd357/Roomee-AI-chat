import React from "react";
import Chats from "./Chats";
import LogOut from "./LogOut";
import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex-1 ">
        <NewChat />
        <Chats />
      </div>
      <LogOut />
    </div>
  );
}

export default Sidebar;
