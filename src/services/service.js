import http from "./httpService"
import config from "./config.json"
const SERVER_URL = "http://localhost:9000"


export const createComments = (comment) => {
  return http.post(`${SERVER_URL}/comments/`, comment);
}

export const getAllComments = () => {
  const url = `${SERVER_URL}/comments`;
  return http.get(url);
}

export const createContact = (contact) => {
  return http.post(`${SERVER_URL}/contact/`, contact);
}
