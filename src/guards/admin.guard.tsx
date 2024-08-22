
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import { ERROR_403_PATH } from '../urls';
import { useAuth } from '../services/context/app.context';
import permissionConstant from '../constants/permisson.constant';
import Loading from '../utilities/loading';

interface Props {
	children: React.ReactNode;
}

const AdminGuard: React.FC<Props> = ({ children }) => {

	const { user } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const isAccessAdmin = () => {
		return user?.permissions.includes(permissionConstant.admin);
	};

	useEffect(() => {
		const checkAuth = async () => {
			// if (user && isAccessAdmin()) {
			// 	setIsAuthenticated(true);
			// 	setLoading(false);
			// } else {
			// 	const authToken = AuthService.getAuthTokenLocalStorage();
			// 	if (authToken?.accessToken) {
			// 		try {
			// 			const response = await AuthService.fetchUserCurrent();
			// 			if (response.status && response.data?.permissions.includes(permissionConstant.admin)) {
			// 				AuthService.setUserCurrent(response.data);
			// 				setIsAuthenticated(true);
			// 			} else {
			// 				AuthService.setUserCurrent(null);
			// 				navigate(ERROR_403_PATH);
			// 			}
			// 		} catch (error) {
			// 			AuthService.setUserCurrent(null);
			// 			navigate(ERROR_403_PATH);
			// 		} finally {
			// 			setLoading(false);
			// 		}
			// 	} else {
			// 		AuthService.setUserCurrent(null);
			// 		navigate(ERROR_403_PATH);
			// 		setLoading(false);
			// 	}
			// }

			setIsAuthenticated(true);
			setLoading(false);

		};

		checkAuth();
	}, [navigate]);

	if (loading) {
		return <Loading loading={loading} />;
	}

	return isAuthenticated ? <>{children}</> : null;

};

export default AdminGuard;

























// import { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../store/user.atom";
// interface Props {
// 	children: ReactNode;
// }
// const AdminGuard: React.FC<Props> = ({ children }) => {
// 	// const user = JSON.parse(localStorage.getItem("user") || "{}");
// 	const user = useRecoilValue(userState);
// 	let location = useLocation();
// 	if (user && user.token) {
// 		return (<>{children}</>);
// 	} else {
// 		return <Navigate to="/login" state={{ from: location }} replace />
// 	}
// };

// export default AdminGuard;


