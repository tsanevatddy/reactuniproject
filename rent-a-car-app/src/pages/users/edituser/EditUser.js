import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col , Row , Form , Input} from 'antd'
import { useParams } from "react-router-dom";
import { addUser, getAllUsers, editUser } from "../../../redux/actions/userActions";
import DefaultLayout from "../../../components/DefaultLayout";
import './EditUser.css'

function EditUser({match}) {

     const dispatch = useDispatch();
     const [user, setuser] = useState({});
     const params = useParams();

     const { users } = useSelector((state) => state.usersReducer);
     const [totalUsers, setTotalUsers] = useState([]);
    

    useEffect(()=>{
        if (users.length == 0) {
            dispatch(getAllUsers());
          } else {
            setTotalUsers(users)
            setuser(users.find((o) => o._id == params.userid));
          }
        }, [users]);
  

    function onFinish(values){

         values._id = user._id;

          dispatch(editUser(values));
         console.log(values);
    }

    return (
        <DefaultLayout>
              
               <Row justify='center mt-5'>
                   <Col lg={8} sm={24} xs={24} className='p-2'>
                     {totalUsers.length > 0  &&(  <Form  initialValues={user} className='bs1 p-2' layout='vertical' onFinish={onFinish} style={{background: '#5a262666'}} >
                           <h3 className="tittle">Edit User</h3>
                           <hr />
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

                           <div className='text-right'>
                           <button className='btn1'>Update</button>
                           </div>

                       </Form>)}
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default EditUser;