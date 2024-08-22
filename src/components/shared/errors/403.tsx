

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { HOME_PATH } from "../../../urls";

// export function NotAuthorizationPage(): JSX.Element {
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		document.title = "Không có quyền truy cập";
// 	}, []);

// 	return (
// 		<div>Không có quyền</div>
// 	);

// 	function backHome() {
// 		navigate(HOME_PATH);
// 	}
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../../urls";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export function NotAuthorizationPage(): JSX.Element {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "Không có quyền truy cập";
	}, []);

	function backHome() {
		navigate(HOME_PATH);
	}

	return (
		<div className="d-flex align-items-center vh-100">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="text-center my-5">
							<h1 className="display-1 text-danger">403</h1>
							<h2 className="mb-4">Không có quyền truy cập</h2>
							<p className="mb-4">
								Bạn không có quyền truy cập vào trang này. Vui lòng liên hệ quản trị viên nếu bạn nghĩ đây là lỗi.
							</p>
							<button className="btn btn-primary" onClick={backHome}>
								Quay lại trang chủ
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotAuthorizationPage;
