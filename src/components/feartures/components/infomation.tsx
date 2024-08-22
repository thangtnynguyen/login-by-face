import { Link } from "react-router-dom";

const Infomation: React.FC = () => {

    return (
        <>
            <div>
                <span className="badge badge-pill badge-primary p-5">
                    <Link to='/auth/login' className="text-white">Login</Link>
                </span>
                <span className="badge badge-pill badge-secondary p-5">
                    <Link to='/auth/register' className="text-white">Register</Link>
                </span>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <span className="badge badge-pill badge-success">Nguyễn Văn Thắng</span>
                <span className="badge badge-pill badge-danger">Bùi Xuân Hoàng</span>
                <span className="badge badge-pill badge-warning">Trần Xuân Trường</span>
            </div>

        </>
    )
}

export default Infomation;