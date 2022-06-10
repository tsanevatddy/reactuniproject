import React from 'react';
import {Row, Col, Form, Input,Select} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
   
    LockOutlined as PasswordIcon
  } from "@ant-design/icons";
// ..
AOS.init();




function Register(){

    const dispatch = useDispatch()
        function onFinish(values){
            dispatch(userRegister(values))
            console.log(values)
        }

    return (
        <div className='login'>
            <Row gutter={16} className='d-flex align-items-center'>
                    <Col lg={16} style = {{positon: 'relative'}}>
                       <img data-aos='slide-left' data-aos-duration='1500' src= "/images/mercedes.png" className='login-image-car' />    
                       <h1 className='login-logo'>PARADISE CARS</h1>
                    </Col>
                    <Col lg={8} className='text-left p-5 form-container'>
                        <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                            <h1 >Sign in</h1>
                            <hr style={{margin: 46}}/>
                            <Form.Item name = 'username' label ='Username' rules = {[{required:true , message: "Please provide your username!"}]}>
                                <Input placeholder="Enter username..."/>
                            </Form.Item>
                            <Form.Item name = 'password' label ='Password' rules = {[{required:true , message: "Please provide your password!"}]}>
                                <Input.Password placeholder="Password" prefix={<PasswordIcon />}/>
                            </Form.Item>
                            <Form.Item name = 'image' label ='Image' rules = {[{required:true , message: "Please provide your image!"}]}>
                                <Input placeholder="Enter image url..."/>
                            </Form.Item>
                            <Form.Item name = 'address' label ='Address' rules = {[{required:true , message: "Please provide your address!"}]}>
                                <Input placeholder="Enter address..."/>
                            </Form.Item>
                            <Form.Item name = 'phone' label ='Phone' rules = {[{required:true, message: "Please provide your phone!"}]}>
                                <Input placeholder="Enter phone.."/>
                            </Form.Item>
                            <Form.Item name = 'email' label ='Email' rules = {[{required:true, message: "Please provide your email!"}]}>
                                <Input  placeholder="Enter your email.." />
                            </Form.Item>
                            <Form.Item name = 'role' label="User / Admin :" rules = {[{required:true, message: "Please enter any role!"}]}>
                                <Input placeholder="Enter your role.."/>
                            </Form.Item>
                            <button className='btn1 mt-2 '>Sign in</button>
                            <hr/>
                            <Link to = '/login'>Already have an account?</Link>
                        </Form>
                    </Col>
            </Row>
        </div>
    )
}

export default Register;