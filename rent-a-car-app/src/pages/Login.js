import React from 'react';
import {Row, Col, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
   
    LockOutlined as PasswordIcon
  } from "@ant-design/icons";
// ..
AOS.init();



function Login(){
    const dispatch = useDispatch()
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)

 }
    return (
        <div className='login'>
            <Row gutter={16} className='d-flex align-items-center'>
                    <Col lg={16} style = {{positon: 'relative'}}>
                       <img  data-aos='slide-right' data-aos-duration='1500' src= "/images/mercedes.png" className='login-image-car' />    
                       <h1 className='login-logo'>PARADISE CARS</h1>
                    </Col>
                    <Col lg={8} className='text-left p-5 form-container'>
                        <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                            <h1>Login</h1>
                            <hr style={{margin: 43}}/>
                            <Form.Item name = 'username' label ='Username' rules = {[{required:true}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name = 'password' label ='Password' rules = {[{required:true , message: "Please provide your password!"}]}>
                                <Input.Password placeholder="Password" prefix={<PasswordIcon />}/>
                            </Form.Item>
                            <button className='btn1 mt-2 '>Login</button>
                           <hr/>
                            <Link to = '/register'>Back to Sign in</Link>
                        </Form>
                    </Col>
            </Row>
        </div>
    )
}

export default Login;