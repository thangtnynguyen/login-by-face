import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../../urls';

const ErrorPage: React.FC = () => {

    const navigate = useNavigate();

    const backToDashboard = () => {
        navigate(HOME_PATH);
    };

    useEffect(() => {
		document.title = "Lỗi rồi";
	}, []);

    return (
        <div className='d-flex align-items-center vh-100'>
            <Container className="text-center my-5">
                <Row>
                    <Col>
                        <h1 className="display-1">500</h1>
                        <h2 className="mb-4">Internal Server Error</h2>
                        <p className="mb-4">
                            Oops! Something went wrong on our end. Please try again later.
                        </p>
                        <Button variant="primary" onClick={backToDashboard}>
                            Go to Homepage
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default ErrorPage;
