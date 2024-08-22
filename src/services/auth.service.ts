import { get, getAuth, post, postLogin } from '../https/http-loading';
import LocalStorageService from './utilities/local-storage.service';
import { AuthToken } from '../models/interfaces/common/auth-token.interface';
import { ApiResult } from '../models/interfaces/common/api-result.interface';
import { LoginRequest } from '../models/interfaces/auth/login-request.interface';
import { RefreshTokenRequest } from '../models/interfaces/auth/refresh-token-request.interface';
import UserCurrent from '../models/interfaces/user/user-current.interface';

let userCurrent: UserCurrent | null | undefined = null;

const AuthService = {
	// Auth token
	getAuthTokenLocalStorage: (): AuthToken | null => {
		return LocalStorageService.getItem('AuthToken');
	},

	setAuthTokenLocalStorage: (authToken: AuthToken | null): void => {
		LocalStorageService.setItem('AuthToken', authToken);
	},

	// User
	setUserCurrent: (currentUser: UserCurrent | null): void => {
		userCurrent = currentUser;
	},

	getUserCurrent: (): UserCurrent | null | undefined => {
		return userCurrent;
	},

	fetchUserCurrent: async (): Promise<ApiResult<UserCurrent>> => {
		return await getAuth('/auth/user-current');
	},

	loginByUsername: async (request: LoginRequest): Promise<ApiResult<AuthToken>> => {
		return await postLogin('/auth/login', request);
	},

	refreshToken: async (request: RefreshTokenRequest): Promise<ApiResult<AuthToken>> => {
		return await postLogin('/auth/refresh-token', request);
	},

	logout: async (): Promise<ApiResult<boolean>> => {
		return await postLogin('/auth/logout', null);
	},

	isAuthenticated: (): boolean => {
		return !!LocalStorageService.getItem('currentUser');
	},

	//get student
	getStudentByUserId:(request: any) =>{
		return getAuth('auth/get-student-by-user-id',request);
	},
	//get teacher
	getTeacherByUserId:(request: any) =>{
		return getAuth('auth/get-teacher-by-user-id',request);
	}
};

export default AuthService;
