import React, { useState, useEffect } from "react";
import "./chatpage.css";
import ALEX from "../../src/components/alex.png";

const ContactUsers = ({ currentContact, chatChange }) => {
  // const [currentUserName, setCurrentUserName] = useState(null);
  const [select, setSelect] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  //   =====================================================
  useEffect(() => {
    fetchGet();
  }, []);
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
      <div
        className={`block ${currentContact === select ? "selected" : ""}`}
        onClick={() => changeCurrentChat(!select)}
      >
        <div className="imgbx">
          <img src={ALEX} className="cover" alt="img" />
        </div>
        <div className="details">
          <div className="listHead">
            <h4>{currentContact.username}</h4>
            {/* <p className="time">10:10</p> */}
          </div>
          <div className="message_p">
            <p>personal message</p>
            <b>1</b>
          </div>
        </div>
      </div>
      <div className="block">
        {allUsers.map((contact, index) => (
          <div
            className={`each-block ${index === select ? "selected" : ""}`}
            onClick={() => changeCurrentChat(index, contact)}
          >
            <div className="imgbx2">
              <img src={ALEX} className="cover" alt="img" />
            </div>
            <div className={`details2 `}>
              <div className="listHead2">
                <h4>{contact.username}</h4>
              </div>
              <div className="message_p">
                <p>personal message</p>
                <b>1</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsers;
