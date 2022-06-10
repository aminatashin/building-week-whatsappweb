import React from "react";
import { BiPowerOff } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div onClick={() => handleClick()}>
      <BiPowerOff style={{ color: "red" }} />
    </div>
  );
};

export default LogOut;
