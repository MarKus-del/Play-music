import axios from "axios";

export const apiNext = axios.create({
  baseURL: "https://api.deezer.com",
});

export const apiFront = axios.create({
  baseURL: "http://172.18.26.4:3000/api",
});
