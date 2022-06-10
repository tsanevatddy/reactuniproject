import { Col , Row , Form , Input} from 'antd'
import React from 'react'
 import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout from '../../../components/DefaultLayout'
import { addUser } from '../../../redux/actions/userActions'


function AddUser() {

     const dispatch = useDispatch()
   

    function onFinish(values){
    
          dispatch(addUser(values))
         console.log(values)
    }

    return (
        <DefaultLayout>
              
               <Row justify='center mt-5'>
                   <Col lg={8} sm={24} xs={24} className='p-2'>
                   <Form layout='vertical' className='login-form p-5' onFinish={onFinish} >
                            <h2 className='tittle' >CREATE NEW USER</h2>
                            <hr style={{margin: 46}}/>
                            <Form.Item name = 'username' label ='Username' rules = {[{required:true , message: "Please provide any username!"}]}>
                                <Input placeholder="Enter username..."/>
                            </Form.Item>
                            <Form.Item name = 'password' label ='Password' rules = {[{required:true , message: "Please provide any password!"}]}>
                                <Input.Password placeholder="Enter password..." />
                            </Form.Item>
                            <Form.Item name = 'image' label ='Image' rules = {[{required:true , message: "Please provide any image!"}]}>
                                <Input placeholder="Enter image url..."/>
                            </Form.Item>
                            <Form.Item name = 'address' label ='Address' rules = {[{required:true , message: "Please provide any address!"}]}>
                                <Input placeholder="Enter address..."/>
                            </Form.Item>
                            <Form.Item name = 'phone' label ='Phone' rules = {[{required:true, message: "Please provide any phone!"}]}>
                                <Input placeholder="Enter phone number..."/>
                            </Form.Item>
                            <Form.Item name = 'email' label ='Email' rules = {[{required:true, message: "Please provide any email!"}]}>
                                <Input  placeholder="Enter email address..." />
                            </Form.Item>
                            <Form.Item name = 'role' label="User / Admin :" rules = {[{required:true, message: "Please enter any role!"}]}>
                                <Input placeholder="Enter user role..."/>
                            </Form.Item>
                         
                            <hr/>
                            <div className='text-right'>
                                 <button className='btn1'>ADD USER</button>
                           </div>
                            
                        </Form>
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default AddUser;