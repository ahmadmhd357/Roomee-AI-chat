import React from "react";

function Message({ message }) {
  const isRoomee = message.user.name === "Roomee";
  return (
    <div className={isRoomee ? "py-5 text-whit" : "py-5 text-whit "}>
      <div
        className={
          isRoomee
            ? "flex gap-3 items-start px-10 max-w-2xl mx-auto"
            : "flex gap-3 items-start flex-row-reverse px-10 max-w-2xl mx-auto"
        }
      >
        <img
          src={message.user.avatar}
          alt="profile pic"
          className={isRoomee ? "w-24 h-24" : "w-12 h-12 rounded-xl"}
        />
        <div
          className={
            isRoomee
              ? " px-3 mt-10 py-2 self-center rounded-tr-2xl text-black rounded-b-2xl bg-red-100"
              : " px-3 py-2 mt-4 rounded-tl-2xl text-black rounded-b-2xl bg-gray-100"
          }
        >
          <p className="pt-1 text-sm">{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
