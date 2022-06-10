import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
 import moment from "moment";
function UserBookings() {
   const dispatch = useDispatch();
   const { bookings } = useSelector((state) => state.bookingsReducer);

   const user = JSON.parse(localStorage.getItem("user"));
      useEffect(() => {
        dispatch(getAllBookings());
      }, []);

  return (
    <DefaultLayout >
      
      <h3 className="text-center mt-2" style ={{color: 'white'}}>My Bookings</h3>
      <Row justify="center" gutter={16} style ={{color: 'white'}}>
        <Col lg={16}>
          
            {bookings.filter(m => m.user == user._id).map((booking)=>{
              return  <Row  gutter={16} className="bs1 m-2 p-2" style={{background: '#66582340'}}>
                
                  <Col lg={6} sm={24}>
                  <p><b>{booking.car.name}</b></p>
                  <p>Total hours : <b>{booking.totalHours}</b></p>
                  <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                  <p>Total amount : <b>{booking.totalAmount}</b></p>
                  </Col>
                  <Col lg={12} sm={24} className="text-center">
                  
                  <p>Transaction Id : <b>{booking.transactionId}</b></p>
                  <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                  <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                  <p>Date of renting: <b>{moment(booking.createdAt).format('DD MMM yyyy')}</b></p>
                  </Col>
                  <Col lg={6} sm={24} className="">
                        <img style={{borderRadius:20}} src={booking.car.image}  height="160" />
                  </Col>
                </Row>

            })}

          
        </Col>

      </Row>
    
      {/* <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {bookings.filter(o=>o.user==user._id).map((booking) => {
             return <Row gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                    <p><b>{booking.car.name}</b></p>
                    <p>Total hours : <b>{booking.totalHours}</b></p>
                    <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                    <p>Total amount : <b>{booking.totalAmount}</b></p>
                </Col>

                <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
                </Col>
              </Row>;
            })}
          
        </Col>
      </Row> */}
    </DefaultLayout>
  );
}

export default UserBookings;