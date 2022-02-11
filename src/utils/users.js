import { generateUuid } from "./uuid";

export const generateUser = (_id = generateUuid(), username = "anonimo") => {
  const newUser = {
    _id,
    username,
  };
  //   const user = JSON.parse(window.sessionStorage.getItem("user"));
  //   if (!Boolean(user) || user.username !== username) {
  //     window.sessionStorage.setItem("user", JSON.stringify(newUser));
  //     addUserToUsersList(newUser);
  //   }
  window.sessionStorage.setItem("user", JSON.stringify(newUser));
  return newUser;
};

export const addUserToUsersList = (user) => {
  let users = getUsersList() ?? [];
  users.push(user);
  window.localStorage.setItem("usersList", JSON.stringify(users));
};

export const getUser = () => {
  const user = JSON.parse(window.sessionStorage.getItem("user"));
  return user;
};

export const getUsersList = () => {
  const users = JSON.parse(window.localStorage.getItem("usersList"));
  return users;
};

export const editUser = (username) => {
  let user = JSON.parse(window.sessionStorage.getItem("user"));
  user.username = username;
  let users = getUsersList()?.filter((e) => e._id !== user._id);
  const userEdited = generateUser(user._id, user.username);
  users.push(userEdited);
  window.localStorage.setItem("usersList", JSON.stringify(users));
};
