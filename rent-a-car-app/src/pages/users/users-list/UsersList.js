import { use } from 'express/lib/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row,Col } from 'antd';
import { Link } from 'react-router-dom';
import {Divider, DatePicker, Checkbox, Modal } from "antd";
import moment from 'moment';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import DefaultLayout from '../../../components/DefaultLayout';
import { getAllUsers, deleteUser } from '../../../redux/actions/userActions';
import './UsersList.css'





function UsersList(){
  
   const  {users} = useSelector(state => state.usersReducer);
   const dispatch = useDispatch();

   useEffect(()=>{
          dispatch(getAllUsers())
       }, [])
    
   return(

    <DefaultLayout>
                <Row justify='center' gutter={20} className="mt-2" >
                <Col lg={20}>  
                    <div className='text-right'>

                          <button className='btn1 mt-2' > <a href='/adduser' style={{textDecoration:'none'}}>Add user</a></button>
                    </div>
                </Col>
           </Row>

            
            <Row justify='center' gutter={20} >
                    {users.map(user=>{
                        return <Col lg={10} sm={24} xs={24}>
                            <Row className='mt-5'>
                                <Col lg={6}>
                                    <div className="pic-frame">
                                    <img  className='' src={user.image}  style={{height:'250px', borderRadius:'20px',border:'2px solid black'}}/>
                                    </div>
                               
                                </Col>
                                <Col lg={8} className=' justify-content-between mr-2'>
                                    <div style={{marginLeft:'60px', fontSize:'110%'}} className='users-info' >
                                    <p><b>Username:</b> {user.username}</p> 
                                            <p> <b>Email:</b> {user.email} </p>
                                            <p><b>Address:</b> {user.address} </p>
                                            <p><b>Phone:</b> {user.phone} </p>
                                            <hr></hr>
                                            
                                 
                                        <div className='mr-4'>
                                        <Link to={`/edituser/${user._id}`}>
                                            <EditOutlined
                                                className="mr-3"
                                                style={{ color: "green", cursor: "pointer" }}
                                            />
                                            </Link>
                                            <Popconfirm
                                                title="Are you sure to delete this user?"
                                                onConfirm={()=>{dispatch(deleteUser({userid : user._id}))}}
                                                
                                                okText="Yes"
                                                cancelText="No"
                                                >
                                                <DeleteOutlined
                                                    style={{ color: "red", cursor: "pointer" }}
                                                />
                                            </Popconfirm>

                                        
                                        </div>
                                    </div>
                                    

                               
                                </Col>
                            </Row>
                            
                         
                           
                        </Col>
                    })}
            </Row>

</DefaultLayout>
    //    <DefaultLayout>
    //        <h1>Users list:</h1>
    //        <Row justify='center' gutter={20} style={{marginTop:'150px'}}>
    //             {users.map(user=>{
    //                 return <Col sm={24} xs={24}>
    //                              <div >
    //                              <Row gutter={18}>
    //                                 <Col xs={24} xl={8}>
    //                                 <img src={user.image} className="carimg"/>
    //                                 </Col>
    //                                 <Col xs={24} xl={10}>
    //                                    <p><b>Username:</b> {user.username}</p> 
    //                                     <p> <b>Email:</b> {user.email} </p>
    //                                     <p><b>Address:</b> {user.address} </p>
    //                                     <p><b>Phone:</b> {user.phone} </p>
    //                                 </Col>
                                   
    //                             </Row>
                        
    //                            <Row>
                                    
                                    
    //                                 <div>
                                        
                                        
                                        


    //                                 </div>
    //                            </Row>
                                    
                               
    //                             <div>
    //                                 {/* <button className="btn1 mr-2"><Link to={`/renting/${car._id}`}>Book now</Link> </button> */}
    //                             </div>
                            
    //                        </div>
                        
    //                 </Col>
    //             })}
    //       </Row>
    //    </DefaultLayout>
   )


//    useEffect(()=>{

//    setTotalCars(cars)
//  }, [cars])

//  function setFilter(values){

//     var selectedFrom = moment(values[0] , 'DD MM yyyy HH:mm')
//     var selectedTo = moment(values[1] , 'DD MMM yyyy HH:mm')

//     var temp=[]

//     for(var car of cars){

//           if(car.bookedTimeSlots.length == 0){
//               temp.push(car)
//           }
//           else{

//                for(var booking of car.bookedTimeSlots) {

//                    if(selectedFrom.isBetween(booking.from , booking.to) ||
//                    selectedTo.isBetween(booking.from , booking.to) || 
//                    moment(booking.from).isBetween(selectedFrom , selectedTo) ||
//                    moment(booking.to).isBetween(selectedFrom , selectedTo)
//                    )
//                    {

//                    }
//                    else{
//                        temp.push(car)
//                    }

//                }

//           }

//     }


//     setTotalCars(temp)


// }
    
//     return (
//         <DefaultLayout>
//              <Row justify='center' gutter={20} className="mt-2" >
//                 <Col lg={20}>  
//                     <div className='text-right'>

//                           <button className='btn1 mt-2' > <a href='/addcar' style={{textDecoration:'none'}}>Add car</a></button>
//                     </div>
//                 </Col>
//            </Row>

           
//             {loading == true && (<Spinner/>)}
          
//           <Row justify='center' gutter={20} >
//                 {totalCars.map(car=>{
//                     return <Col lg={5} sm={24} xs={24}>
//                         <div className="car p-2 bs1 ">
//                            <img src={car.image} className="carimg"/>
//                            <div className="card-info d-flex align-items-center justify-content-between">
//                                 <div>
//                                     <p>{car.name}</p>
//                                     <p>Rent Per Hour: {car.rentPerHour} </p>
//                                 </div>
//                                 <div className='mr-4'>
//                                 <Link to={`/editcar/${car._id}`}>
//                                     <EditOutlined
//                                         className="mr-3"
//                                         style={{ color: "green", cursor: "pointer" }}
//                                     />
//                                     </Link>
//                                     <Popconfirm
//                                         title="Are you sure to delete this car?"
//                                         onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                                        
//                                         okText="Yes"
//                                         cancelText="No"
//                                         >
//                                         <DeleteOutlined
//                                             style={{ color: "red", cursor: "pointer" }}
//                                         />
//                                     </Popconfirm>

                                  
//                                 </div>
                            
//                            </div>
//                         </div>
//                     </Col>
//                 })}
//           </Row>

//         </DefaultLayout>
//     )
}

export default UsersList;