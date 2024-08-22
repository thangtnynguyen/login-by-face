import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import FaceRecognitionModal from '../../modals/face-scan';
import { Link } from 'react-router-dom';
import FaceRegistrationModal from '../../modals/face-scan-identity';

import faceIcon from '../../../assets/images/icons/icons8-face-scan-64.png';

const Login: React.FC = () => {

	//login by face
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);


	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	//register login by face
	const [showRegisterModal, setShowRegisterModal] = useState(false);

	const handleOpenRegisterModal = () => setShowRegisterModal(true);
	const handleCloseRegisterModal = () => setShowRegisterModal(false);


	return (
		<>
			<Form
				name="login"
				initialValues={{ remember: true }}
				style={{ maxWidth: 360 }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: 'Please input your Username!' }]}
				>
					<Input prefix={<UserOutlined />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input prefix={<LockOutlined />} type="password" placeholder="Password" />
				</Form.Item>
				<Form.Item>
					<Flex justify="space-between" align="center">
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<a href="">Forgot password</a>
					</Flex>
				</Form.Item>

				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Log in
					</Button>
					or &nbsp;
					<Link to="/auth/register">Register now!</Link>
				</Form.Item>
			</Form>


			{/* login by face */}
			<div className='d-flex align-items-center justify-content-center ' onClick={handleOpenModal}>
				<Button className="open-modal-button" >Login with Face Recognition</Button>
				<img className='fs-24' src={faceIcon} />
			</div>
			<FaceRecognitionModal show={showModal} handleClose={handleCloseModal} />

			{/* register login by face */}
			<div className='d-flex align-items-center justify-content-center ' onClick={handleOpenRegisterModal}>
				<Button className="open-modal-button">
					Register Face Recognition
				</Button>				<img className='fs-24' src={faceIcon} />
			</div>
			<FaceRegistrationModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />
		</>




	);

};

export default Login;