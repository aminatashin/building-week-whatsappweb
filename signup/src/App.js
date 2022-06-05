import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Log from "./components/Log";
import Signup from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Log />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
