
import React from 'react';
import { Form, Input, Button, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../../App.css';
import './Login.css';
import connectLogo from '../../Assets/Images/logo.png';

const Register = () => {
    const [form] = Form.useForm();

    const handleRegister = async (values: any) => {
        const headers = {
            'Accept': 'application/json'
        };
        const {name, email, password} = values;

        await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, {
            name,
            email,
            password
        }, { headers }).then(response => {
            toast.success("User successfully registered!");
            form.resetFields();
        }).catch(error => {
            console.error('error', error);
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
                                className={'title-text'}>Register</span>}
                        >
                            <div className={'card-text '} style={{
                                color: "#CBD5e0"
                            }}>
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={handleRegister}
                                    style={{ width: 300 }}
                                    className="login-form" 
                                    form={form}
                                    colon={false}
                                >
                                    <Form.Item
                                        label={<label className="mr-20-email">Name</label>}
                                        name="name"
                                        rules={[{ required: true, message: 'Name is required!' }]}
                                        className="form-item"
                                    >
                                        <Input type="text" placeholder='Please enter name'/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<label className="mr-20-email">Email</label>}
                                        name="email"
                                        rules={[{ required: true, message: 'Email is required!' }]}
                                        className="form-item "
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
                                            Register
                                        </Button>
                                        <p className="primary-color">
                                            Have an account already?{' '}
                                            <Link to="/login" className="cursor-pointer" >
                                                Log in
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

export default Register;