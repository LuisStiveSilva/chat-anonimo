import React from "react";
import { Routes, Route } from "react-router-dom";
import { generateUser, addUserToUsersList, getUser } from "./utils/users";
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
        <Route path="chat-anonimo/" element={<Home userData={userData} />} />
        <Route path="chat-anonimo/configuracion" element={<Configuration />} />
        <Route path="chat-anonimo/chat/:id" element={<Chat />} />
        <Route path="chat-anonimo/lista-chats" element={<ChatsList />} />
        <Route path="chat-anonimo/lista-grupo" element={<GroupsList />} />
        <Route path="chat-anonimo/lista-usuarios" element={<UsersList />} />
      </Routes>
    </>
  );
}

export default App;
