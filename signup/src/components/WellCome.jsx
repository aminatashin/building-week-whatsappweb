import React from "react";
import "./wellcome.css";

const WellCome = ({ currentContact }) => {
  return (
    <div className="wellcome">
      <h1>
        wellcome,<span>{currentContact.username}</span>
      </h1>
      <h3>Please select a chat to start Messaging</h3>
    </div>
  );
};

export default WellCome;
