import React from "react";

function Message({ message }) {
  const isRoomee = message.user.name === "Roomee";
  return (
    <div
      className={
        isRoomee ? "py-5 text-whit bg-gray-500" : "py-5 text-whit "
      }
    >
      <div className={isRoomee?"flex gap-3 items-center px-10 max-w-2xl mx-auto":"flex gap-3 items-center flex-row-reverse px-10 max-w-2xl mx-auto"}>
        <img
          src={message.user.avatar}
          alt="profile pic"
          className="w-12 h-12 rounded-xl"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
