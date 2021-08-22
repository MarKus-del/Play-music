import axios from "axios";

const addressApiFront =
  process.env.NEXT_PUBLIC_HOSTNAME || "http://127.0.0.1:3000/api";

export const apiNext = axios.create({
  baseURL: "https://api.deezer.com",
});

export const apiFront = axios.create({
  baseURL: addressApiFront,
});
