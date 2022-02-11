import uuid from "react-uuid";

export const generateUuid = () => {
  let sessionUuid = window.sessionStorage.getItem("_id");

  if (!Boolean(sessionUuid) || !Boolean(window.name)) {
    sessionUuid = uuid();
    window.sessionStorage.setItem("_id", sessionUuid);
  }
  window.name = sessionUuid;
  return sessionUuid;
};

export const obtainUuid = () => {
  let sessionUuid = window.sessionStorage.getItem("_id");
  return sessionUuid;
};
