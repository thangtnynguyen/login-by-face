import axios from "axios";
import AuthService from "../services/auth.service";

export const apiClient = axios.create({
	baseURL: "https://localhost:7038/api/admin/",
	timeout: 1000 * 60 * 30 * 3, // 90 minutes
});
apiClient.interceptors.request.use(
	function (config) {
		// let user = JSON.parse(localStorage.getItem("user") || "{}");
		// config.headers.Authorization = "Bearer " + user.token;
		
		let user = AuthService.getAuthTokenLocalStorage() || null;
		config.headers.Authorization = "Bearer " + user?.accessToken;

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);



//login
export const apiClientAuth = axios.create({
	baseURL: "https://localhost:7038/api/",
	timeout: 1000 * 60 * 30 * 3, // 90 minutes
});
apiClientAuth.interceptors.request.use(
	function (config) {

		let user = AuthService.getAuthTokenLocalStorage() || null;
		config.headers.Authorization = "Bearer " + user?.accessToken;

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);
