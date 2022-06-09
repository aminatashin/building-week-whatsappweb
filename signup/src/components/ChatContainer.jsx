import React from "react";
import "./chatpage.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ALEX from "../../src/components/alex.png";

const ChatContainer = ({ currentContact }) => {
  return (
    <div>
      <div className="header">
        <div className="imgText">
          <div className="userimg">
            <img src={ALEX} className="cover" alt="img" />
          </div>
          <h4>
            {currentContact.username} <br />
            <span>online</span>
          </h4>
        </div>
        <ul className="nav_icon">
          <li>
            <HiOutlineSearch />
          </li>
          <li>
            <BsThreeDotsVertical />
          </li>
        </ul>
      </div>
      <div className="chatBox">
        <div className="message my_message">
          <p>
            hi <br /> <span>10:22</span>
          </p>
        </div>
        <div className="message friend_message">
          <p>
            friend <br /> <span>10:22</span>
          </p>
        </div>
        <div className="message my_message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
            voluptates veritatis? Provident tempora eaque perferendis nulla
            autem eveniet optio quod? Quae, distinctio nobis. Maxime at illo
            totam quo nesciunt. <br /> <span>10:22</span>
          </p>
        </div>
        <div className="message friend_message">
          <p>
            FRIEND FRINEF FRIEND <br /> <span>10:22</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
