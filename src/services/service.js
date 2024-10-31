import http from "./httpService"
import config from "./config.json"
const SERVER_URL = "http://localhost:4000"


export const createComments = (comment) => {
  return http.post(`${config.localapi}/comments`, comment);
}

export const getAllComments = () => {
  const url = `${config.localapi}/commentsList`;
  return http.get(url);
}

export const createContact = (contact) => {
  return http.post(`${config.localapi}/contact`, contact);
}
