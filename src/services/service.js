import http from "./httpService"
import config from "./config.json"
const SERVER_URL = "http://localhost:9000"


export const createComments = (comment) => {
  return http.post(`${config.hadiapi}/comments/`, comment);
}

export const getAllComments = () => {
  const url = `${config.hadiapi}/comments`;
  return http.get(url);
}

export const createContact = (contact) => {
  return http.post(`${config.hadiapi}/contact/`, contact);
}
