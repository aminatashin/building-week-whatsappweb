import React, { useState, useEffect } from "react";
import "./chatpage.css";
import ALEX from "../../src/components/alex.png";

const ContactUsers = ({ currentContact, chatChange }) => {
  const [currentUserName, setCurrentUserName] = useState(null);
  const [select, setSelect] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  //   =====================================================
  useEffect(() => {
    if (currentContact) {
      setCurrentUserName(currentContact.username);
    }
    fetchGet();
  }, [currentContact]);
  // =================================================
  const fetchGet = async () => {
    const res = await fetch("http://localhost:3004/user/signup", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setAllUsers(data);
      console.log(data);
    }
  };
  //   ===========================================
  const changeCurrentChat = (index, contact) => {
    setSelect(index);
    chatChange(contact);
  };

  return (
    <div className="chatlist">
      <div className="block">
        <div className="imgbx">
          <img src={ALEX} className="cover" alt="img" />
        </div>
        <div className="details">
          <div className="listHead">
            <h2>{currentUserName}</h2>
            <p className="time">10:10</p>
          </div>
          <div className="message_p">
            <p>personal message</p>
            <b>1</b>
          </div>
        </div>
      </div>
      <div className="block">
        {allUsers.map((contact, index) => (
          <>
            <div className="imgbx">
              <img src={ALEX} className="cover" alt="img" />
            </div>
            <div
              className={`details ${index === select ? "selected" : ""}`}
              onClick={() => changeCurrentChat(index, contact)}
            >
              <h4>{contact.username}</h4>
              <div className="listHead">
                <p className="time">10:10</p>
              </div>
              <div className="message_p">
                <p>personal message</p>
                <b>1</b>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ContactUsers;
