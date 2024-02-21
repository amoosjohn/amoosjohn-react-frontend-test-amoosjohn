
import React, { useContext } from 'react';
import { Form, Input, Button, Card, Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../../App.css';
import './Login.css';
import connectLogo from '../../Assets/Images/logo.png';
import { setAccessToken, setUser, removeAccessToken, removeUser } from './auth';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (values: any) => {
        // Add your authentication logic
        const headers = {
            'Accept': 'application/json'
        };
        const {email, password} = values;

        await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
            email,
            password
        }, { headers }).then(response => {
            const {user,  access_token} = response.data;
            setAccessToken(access_token);
            setUser(user);
            toast.success("Login successfully!");
            navigate('/company-location-list');
        }).catch(error => {
            console.error('error', error);
            removeAccessToken();
            removeUser();
            const {response} = error;
            if(response.status === 422) {
                toast.error(response.data.message);
            }
            
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="app">
                <Row className={'container'} gutter={[16, 16]}>
                    <Col span={24}>
                        <Col span={2}>
                            <img src={connectLogo} className={'logo'} alt="logo"/>
                        </Col>
                    </Col>
                    <Col span={24}>
                        <Card 
                            className={'card-style'}
                            title={<span
                                className={'title-text'}>Login</span>}
                        >
                            <div className={'card-text '} style={{
                                color: "#CBD5e0"
                            }}>
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={handleLogin}
                                    style={{ width: 300 }}
                                    className="login-form" 
                                    colon={false}
                                >
                                    <Form.Item
                                        label={<label className="mr-20-email">Email</label>}
                                        name="email"
                                        rules={[{ required: true, message: 'Email is required!' }]}
                                        className="form-item"
                                    >
                                        <Input type="email" placeholder='Please enter email'/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Password is required!' },
                                                { min: 6, message: 'Password must be at least 6 characters!' },
                                            ]}
                                        className="form-item"
                                    >
                                        <Input.Password placeholder='Please enter password'/>
                                    </Form.Item>

                                

                                    <Form.Item>
                                        <Button type="primary" className="btn-100" htmlType="submit">
                                            Login
                                        </Button>
                                        <p className="primary-color">
                                            Don't have an account?{' '}
                                            <Link to="/register" className="cursor-pointer" >
                                                Register here
                                            </Link>
                                        </p>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </div>
    
            
        </>
    );
};

export default Login;