import { use } from 'express/lib/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsAction';
import { Button, Row,Col } from 'antd';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {Divider, DatePicker, Checkbox, Modal } from "antd";
import moment from 'moment';



const {RangePicker} = DatePicker;




function Home(){
  
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
            <Row className='mt-3' justify='center'>
                <Col lg={20} className='d-flex justify-content-left'>
                    <RangePicker showTime={{format: 'HH:mm'}} fromat='DD MMM yyyy HH:mm' onChange={setFilter}/>
                </Col>
            </Row>
            {loading == true && (<Spinner/>)}
          
          <Row justify='center' gutter={20} >
                {totalCars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2 bs1 ">
                            <div className=''>
                              <img src={car.image} className="carimg "/>
                            </div>
                          
                           <div className="card-info d-flex align-items-center justify-content-between">
                                <div style={{color:'white'}}>
                                    <p><b>{car.name} </b></p>
                                    <p>Rent Per Hour: {car.rentPerHour} BGN. </p>
                                </div>
                                <div>
                                    <button  className="btn1 mr-2"><Link style={{textDecoration:'none', fontWeight:'600', color:'green'}}  to={`/renting/${car._id}`}>Book now</Link> </button>
                                </div>
                            
                           </div>
                        </div>
                    </Col>
                })}
          </Row>

        </DefaultLayout>
    )
}

export default Home;