import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet } from 'react-router-dom';
import '../assets/pages/app-layout.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import ListNotification from '../pages/notification/list-notification';
import { useRecoilStoreID } from 'recoil';
import { useAuth } from '../services/context/app.context';



type Props = {
	children?: React.ReactNode;
};

export default function AppLayout({ children }: Props): JSX.Element {
	const isAuthPage = false;
	const isAdminPage = true;
	const { user } = useAuth();


	useEffect(() => {


	}, []);
	//view
	return (
		<>
			{isAuthPage && (
				<div>
					{/* login */}
				</div>
			)}

			{isAdminPage && (
				<div id="layout-wrapper">
					<div className="main-content">
						<div className="page-content">
							<div className="container">
								{/* {children} */}
								<Outlet></Outlet>
								{/* <Outlet/> {children} */}
							</div>
						</div>
					</div>
					<div className="rightbar-overlay"></div>
				</div>

			)}
		</>
	);
}
