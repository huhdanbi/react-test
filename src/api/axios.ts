import axios from "axios";

const timeout = 5000;
const baseURL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: timeout,
	headers: {
		"Content-type": "application/json",
	}
});