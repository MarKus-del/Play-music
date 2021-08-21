import axios from "axios";

export const apiNext = axios.create({
  baseURL: "https://api.deezer.com",
});

export const apiFront = axios.create({
  baseURL: "http://192.168.150.86:3000/api",
});
