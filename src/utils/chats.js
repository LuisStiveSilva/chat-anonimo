import uuid from "react-uuid";

export const generateChat = (type, name, users = []) => {
  const chat = {
    _id: uuid(),
    users,
    type,
    messages: [],
    name,
  };
  addChatToList(chat);
  if (type === "individual") return chat;
};

export const addChatToList = (chat) => {
  let chats = getChatsList() ?? [];
  chats.push(chat);
  window.localStorage.setItem("chatsList", JSON.stringify(chats));
};

export const getChatsList = () => {
  const chats = JSON.parse(window.localStorage.getItem("chatsList"));
  return chats;
};

export const getChat = (id) => {
  const chatsList = getChatsList();
  const chat = chatsList.find((e) => e._id === id);
  return chat;
};

export const addUserToChat = (userId, chatId) => {
  let chat = getChat(chatId);
  chat.users.push(userId);
  let chatsList = getChatsList();
  const chatIndex = chatsList.findIndex((e) => e._id === chatId);
  chatsList.splice(chatIndex, 1, chat);
  window.localStorage.setItem("chatsList", JSON.stringify(chatsList));
};

export const addMessage = (user, chatId, messageText, date) => {
  const messages = {
    _id: uuid(),
    hidden: false,
    text: messageText,
    user,
    date,
  };
  let chat = getChat(chatId);
  chat.messages.push(messages);
  let chatsList = getChatsList();
  const chatIndex = chatsList.findIndex((e) => e._id === chatId);
  chatsList.splice(chatIndex, 1, chat);
  window.localStorage.setItem("chatsList", JSON.stringify(chatsList));
};

export const hiddenMessage = (message, chatId) => {
  const messages = {
    ...message,
    hidden: true,
  };
  let chat = getChat(chatId);
  const messageIndex = chat.messages.findIndex((e) => e._id === message._id);
  chat.messages.splice(messageIndex, 1, messages);
  let chatsList = getChatsList();
  const chatIndex = chatsList.findIndex((e) => e._id === chatId);
  chatsList.splice(chatIndex, 1, chat);
  window.localStorage.setItem("chatsList", JSON.stringify(chatsList));
};
