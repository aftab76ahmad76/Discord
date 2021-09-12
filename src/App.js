import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
      {/* {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )} */}
    </div>
  );
}

export default App;
