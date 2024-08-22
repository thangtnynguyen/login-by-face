import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import { LOGIN_PATH } from '../urls';
import { useAuth } from '../services/context/app.context';
import Loading from '../utilities/loading';

interface Props {
	children: React.ReactNode;
}

const LoginGuard: React.FC<Props> = ({ children }) => {

	const { user } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// const checkAuth = async () => {
		// 	if (user) {
		// 		setIsAuthenticated(true);
		// 		setLoading(false);
		// 	} else {
		// 		const authToken = AuthService.getAuthTokenLocalStorage();
		// 		if (authToken?.accessToken) {
		// 			try {
		// 				const response = await AuthService.fetchUserCurrent();
		// 				if (response.status) {
		// 					AuthService.setUserCurrent(response.data);
		// 					setIsAuthenticated(true);
		// 				} else {
		// 					AuthService.setUserCurrent(null);
		// 					navigate(LOGIN_PATH);
		// 				}
		// 			} catch (error) {
		// 				AuthService.setUserCurrent(null);
		// 				navigate(LOGIN_PATH);
		// 			} finally {
		// 				setLoading(false);
		// 			}
		// 		} else {
		// 			AuthService.setUserCurrent(null);
		// 			navigate(LOGIN_PATH);
		// 			setLoading(false);
		// 		}
		// 	}
		// };

		// checkAuth();

		setIsAuthenticated(true);
		setLoading(false);
	}, [navigate]);

	if (loading) {
		return <Loading loading={loading} />;
	}

	return isAuthenticated ? <>{children}</> : null;
};

export default LoginGuard;



























///////////////////////////////////////////////////////////////////    CÁCH 2
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthService from '../services/auth.service';
// import Loading from '../utilities/loading';
// import { LOGIN_PATH } from '../urls';

// interface Props {
//   children: React.ReactNode;
// }

// const LoginGuard: React.FC<Props> = ({ children }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const userCurrent = AuthService.getUserCurrent();
//       if (userCurrent) {
//         setIsAuthenticated(true);
//         setLoading(false);
//       } else {
//         const authToken = AuthService.getAuthTokenLocalStorage();
//         if (authToken?.accessToken) {
//           try {
//             const response = await AuthService.fetchUserCurrent();
//             if (response.status) {
//               AuthService.setUserCurrent(response.data);
//               setIsAuthenticated(true);
//             } else {
//               AuthService.setUserCurrent(null);
//               navigate(LOGIN_PATH);
//             }
//           } catch (error) {
//             AuthService.setUserCurrent(null);
//             navigate(LOGIN_PATH);
//           } finally {
//             setLoading(false);
//           }
//         } else {
//           AuthService.setUserCurrent(null);
//           navigate(LOGIN_PATH);
//           setLoading(false);
//         }
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   if (loading) {
//     return <Loading loading={loading} />;
//   }

//   return isAuthenticated ? <>{children}</> : null;
// };

// export default LoginGuard;











// import { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../store/user.atom";
// interface Props {
// 	children: ReactNode;
// }
// const LoginGuard: React.FC<Props> = ({ children }) => {
// 	// const user = JSON.parse(localStorage.getItem("user") || "{}");
// 	const user = useRecoilValue(userState);
// 	let location = useLocation();
// 	if (user && user.token) {
// 		return (<>{children}</>);
// 	} else {
// 		// return <Navigate to="/login" state={{ from: location }} replace />
// 		return (<>{children}</>);
// 	}

// };

// export default LoginGuard;


