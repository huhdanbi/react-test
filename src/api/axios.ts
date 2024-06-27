import axios from "axios";

const timeout = 5000;
const baseURL = process.env.VITE_REACT_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
    timeout: timeout,
    headers: {
        "Content-type": "application/json",
    }
  });