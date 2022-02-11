import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  generateUser,
  editUser,
  addUserToUsersList,
  getUser,
} from "./utils/users";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Configuration from "./pages/Configuration/Configuration";
import ChatsList from "./pages/ChatsList/ChatsList";
import Chat from "./pages/Chat/Chat";
import UsersList from "./pages/UsersList/UsersList";
import GroupsList from "./pages/GroupsList/GroupsList";
import { generateChat, getChatsList } from "./utils/chats";

const groupChat = [
  {
    name: "Videojuegos",
  },
  {
    name: "Programación",
  },
  {
    name: "Cocina",
  },
];

function App() {
  const localUser = JSON.parse(window.sessionStorage.getItem("user"));
  const chatList = getChatsList() ?? [];
  if (chatList.length === 0) {
    groupChat.map((e) => generateChat("grupal", e.name));
  }

  if (!Boolean(localUser)) {
    const newUser = generateUser();
    addUserToUsersList(newUser);
  }
  const userData = getUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="configuracion" element={<Configuration />} />
        <Route path="chat/:id" element={<Chat />} />
        <Route path="lista-chats" element={<ChatsList />} />
        <Route path="lista-grupo" element={<GroupsList />} />
        <Route path="lista-usuarios" element={<UsersList />} />
      </Routes>
    </>
  );
}

export default App;
