import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../../urls";
import errorImage from "../../../assets/images/error-img.png"
import { useEffect } from "react";
// import "../../../assets/pages/app-layout.css"
const NotFoundPage = () => {
	const navigate = useNavigate();

	const backToDashboard = () => {
		navigate(HOME_PATH);
	};

	useEffect(() => {
		document.title = "Không tìm thấy trang web";
	}, []);
	
	return (
		<div className="d-flex align-items-center vh-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="text-center my-5">
							<h1 className="font-weight-bold text-error">
								404 <span className="error-text"> <img src={errorImage} alt="" className="error-img" /></span> 404
							</h1>
							<h3 className="text-uppercase">Xin lỗi, trang không tồn tại!</h3>
							<div className="mt-5 text-center">
								<button className="btn btn-primary waves-effect waves-light text-white" onClick={backToDashboard}>Quay lại trang chủ</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
