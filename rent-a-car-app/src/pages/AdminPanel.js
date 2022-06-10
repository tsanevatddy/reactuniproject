import { use } from 'express/lib/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import {deleteCar, getAllCars } from '../redux/actions/carsAction';
import { Button, Row,Col } from 'antd';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {Divider, DatePicker, Checkbox, Modal } from "antd";
import moment from 'moment';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';




const {RangePicker} = DatePicker;





function AdminPanel(){
  
   const  {cars} = useSelector(state => state.carsReducer);
   const {loading} = useSelector(state=>state.alertsReducer);
   const [totalCars , setTotalCars] = useState([]);
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(getAllCars())
   }, [])


   useEffect(()=>{

   setTotalCars(cars)
 }, [cars])

 function setFilter(values){

    var selectedFrom = moment(values[0] , 'DD MM yyyy HH:mm')
    var selectedTo = moment(values[1] , 'DD MMM yyyy HH:mm')

    var temp=[]

    for(var car of cars){

          if(car.bookedTimeSlots.length == 0){
              temp.push(car)
          }
          else{

               for(var booking of car.bookedTimeSlots) {

                   if(selectedFrom.isBetween(booking.from , booking.to) ||
                   selectedTo.isBetween(booking.from , booking.to) || 
                   moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                   moment(booking.to).isBetween(selectedFrom , selectedTo)
                   )
                   {

                   }
                   else{
                       temp.push(car)
                   }

               }

          }

    }


    setTotalCars(temp)


}
    
    return (
        <DefaultLayout>
             <Row justify='center' gutter={20} className="mt-2" >
                <Col lg={20}>  
                    <div className='text-right'>

                          <button className='btn1 mt-2' > <a href='/addcar' style={{textDecoration:'none'}}>Add car</a></button>
                    </div>
                </Col>
           </Row>

           
            {loading == true && (<Spinner/>)}
          
          <Row justify='center' gutter={20}  style ={{color: 'white'}}>
                {totalCars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2 bs1 ">
                           <img src={car.image} className="carimg"/>
                           <div className="card-info d-flex align-items-center justify-content-between">
                                <div>
                                <p><b>{car.name} </b></p>
                                    <p>Rent Per Hour: {car.rentPerHour} BGN. </p>
                                </div>
                                <div className='mr-4'>
                                <Link to={`/editcar/${car._id}`}>
                                    <EditOutlined
                                        className="mr-3"
                                        style={{ color: "green", cursor: "pointer" }}
                                    />
                                    </Link>
                                    <Popconfirm
                                        title="Are you sure to delete this car?"
                                        onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                                        
                                        okText="Yes"
                                        cancelText="No"
                                        >
                                        <DeleteOutlined
                                            style={{ color: "red", cursor: "pointer" }}
                                        />
                                    </Popconfirm>

                                  
                                </div>
                            
                           </div>
                        </div>
                    </Col>
                })}
          </Row>

        </DefaultLayout>
    )
}

export default AdminPanel;