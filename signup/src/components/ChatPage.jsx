import React, { useState, useEffect } from "react";
import "./chatpage.css";
import ALEX from "../../src/components/alex.png";
import { TbCircleDashed } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegSmileWink } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContactUsers from "./Contacts";
import WellCome from "./WellCome";
import ChatContainer from "./ChatContainer";

const ChatPage = () => {
  const navigate = useNavigate();
  // const [select, setSelect] = useState(false);

  const [currentContact, setCurrentContact] = useState("");
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  // ==========================================
  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      navigate("/");
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    fetchGet();
  }, []);
  // ==================FETCH========================
  const fetchGet = async () => {
    const res = await fetch("http://localhost:3004/user/signup/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setCurrentContact(data);
      console.log(data);
    }
  };

  // ==========================================
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  // ==========================================
  return (
    <div className="container">
      <div className="leftside">
        {/* header */}
        <div className="header">
          <div className="userimg">
            <img src={ALEX} className="cover" alt="img" />
          </div>
          <div>{currentContact.username}$$</div>
          <ul className="nav_icon">
            <li>
              <TbCircleDashed />
            </li>
            <li>
              <BsFillChatLeftTextFill />
            </li>
            <li>
              <BsThreeDotsVertical />
            </li>
          </ul>
        </div>
        {/* search */}
        <div className="search_chat">
          <div>
            <input type="text" placeholder="search or start new chat" />
            <HiOutlineSearch className="search-icon" />
          </div>
        </div>
        {/* chat list */}
        {/* <div className="chatlist">
          <div onClick={() => setSelect(!select)} className="block active">
            <div className="imgbx">
              <img src={ALEX} className="cover" alt="img" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>amin</h4>
                <p className="time">10:10</p>
              </div>
              <div className="message_p">
                <p>personal message</p>
                <b>1</b>
              </div>
            </div>
          </div>
          <div className="block active">
            <div className="imgbx">
              <img src={ALEX} className="cover" alt="img" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>marjan</h4>
                <p className="time">20:10</p>
              </div>
              <div className="message_p">
                <p>where is aubi?</p>
                <b>1</b>
              </div>
            </div>
          </div>
        </div> */}
        <ContactUsers
          currentContact={currentContact}
          chatChange={handleChatChange}
        />
      </div>
      {/* rightside */}
      <div className="rightside">
        {/* <div className="header">
          <div className="imgText">
            <div className="userimg">
              <img src={ALEX} className="cover" alt="img" />
            </div>
            <h4>
              amin <br />
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
        </div> */}
        {/* chat box */}
        {/* <div className="chatBox">
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
        </div> */}
        {setIsLoaded && currentChat === undefined ? (
          <WellCome currentContact={currentContact} />
        ) : (
          <ChatContainer currentContact={currentContact} />
        )}

        {/* chat input */}
        <div className="chatbox_input ">
          <FaRegSmileWink className="icon" />
          <GrAttachment className="icon" />
          <input type="text" placeholder="Type a message" />
          <FaMicrophone className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
