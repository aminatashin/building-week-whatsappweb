import React, { useState } from "react";
import "./chatpage.css";
import { FaRegSmileWink } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import Picker from "emoji-picker-react";

const MessageInput = () => {
  // ================================
  const [emoji, setEmoji] = useState(false);
  const [msg, setMsg] = useState("");
  // ================================
  const handleEmoji = () => {
    setEmoji(!emoji);
  };
  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };
  // ================================
  return (
    <div>
      <div className="chatbox_input ">
        <div className="emoji">
          <FaRegSmileWink className="icon" onClick={handleEmoji} />
          {emoji && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
        <GrAttachment className="icon" />
        <input
          type="text"
          placeholder="Type a message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <FaMicrophone className="icon" />
      </div>
    </div>
  );
};

export default MessageInput;
