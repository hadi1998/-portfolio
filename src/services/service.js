import http from "./httpService"
import config from "./config.json"
const SERVER_URL = "http://localhost:4000"


export const createComments = (comment) => {
  return http.post(`${SERVER_URL}/api/comments/`, comment);
}

export const getAllComments = () => {
  const url = `${SERVER_URL}/api/commentsList`;
  return http.get(url);
}

export const createContact = (contact) => {
  return http.post(`${SERVER_URL}/api/contact/`, contact);
}
