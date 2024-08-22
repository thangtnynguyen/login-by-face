import { apiClient, apiClientAuth } from "../interceptors/http.interceptor";

export const get = async (endpoint: string, data?: any): Promise<any> => {
	try {
		const res = await apiClient?.get(`${endpoint}`, { params: data });
		return res?.data;
	} catch (error) {
		console.error('Error performing GET request:', error);
		throw error;
	}
};

export const post = async (endpoint: string, data: any): Promise<any> => {
	try {
		const res = await apiClient?.post(`${endpoint}`, data);
		return res?.data;
	} catch (error) {
		console.error('Error performing POST request:', error);
		throw error;
	}
};

export const postFormData = async (endpoint: string, data: FormData): Promise<any> => {
	try {
		const res = await apiClient?.post(`${endpoint}`, data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		return res?.data;
	} catch (error) {
		console.error('Error performing POST FormData request:', error);
		throw error;
	}
};





//specical exel
export const getExel = async (endpoint: string, data?: any, options = {}): Promise<any> => {
	try {
		const res = await apiClient?.get(endpoint, { params: data, ...options });
		return res?.data;
	} catch (error) {
		console.error('Error performing GET request:', error);
		throw error;
	}
};



//specical login,auth
export const postLogin = async (endpoint: string, data: any): Promise<any> => {
	try {
		const res = await apiClientAuth?.post(`${endpoint}`, data);
		return res?.data;
	} catch (error) {
		console.error('Error performing POST request:', error);
		throw error;
	}
};

export const postFormDataAuth = async (endpoint: string, data: FormData): Promise<any> => {
	try {
		const res = await apiClientAuth?.post(`${endpoint}`, data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		return res?.data;
	} catch (error) {
		console.error('Error performing POST FormData request:', error);
		throw error;
	}
};

export const getAuth = async (endpoint: string, data?: any): Promise<any> => {
	try {
		const res = await apiClientAuth?.get(`${endpoint}`, { params: data });
		return res?.data;
	} catch (error) {
		console.error('Error performing GET request:', error);
		throw error;
	}
};
