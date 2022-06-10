import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { getAllCars } from "../redux/actions/carsAction";
import { useParams } from "react-router-dom";
import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import moment from 'moment';
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from 'react-stripe-checkout';



function RentingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const {RangePicker} = DatePicker;
  const[from, setFrom] = useState();
  const[to , setTo] = useState();
  const[totalHours , setTotalHours ] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [driver, setDriver] = useState(false);
  const [showModal , setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == params.carid));
    }
  }, [cars]);

  function pickTime(values) {
    setFrom(moment(values[0]).format("DD MMM yyyy HH:mm"));
    setTo(moment(values[1]).format("DD MMM yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
    // 3 days = 72h
    if(totalHours > 72 && totalHours <= 120){
      setTotalAmount(totalAmount * 0.95)
    }
    // 5 days = 120h
    else if(totalHours > 120 && totalHours <= 240){
      setTotalAmount(totalAmount * 0.93)
    }
    else if(totalHours > 120 && totalHours <= 240){
      setTotalAmount(totalAmount * 0.90)
    }
  
  }, [driver, totalHours]);

  function bookNow(){

  
  }

  function onToken(token){
    const reqObj = {
      token,   
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

   dispatch(bookCar(reqObj));
  }

  

  return (
    <DefaultLayout>
        <Row justify="center" className="d-flex align-items-center" style={{minHeight:'80vh'}}>
            <Col lg={10} sm={24} xs={24}>
                <img src={car.image} className="carImg" bs1></img>
            </Col>
            <Col lg={10} sm={24} xs={24}>
              <Divider type="horizontal" dashed style={{color:' #041762;', fontSize: '170%'}}>Car information:</Divider>
              <Row>
                  <Col lg={10}>
                  <ul style={{color:'white', fontSize:'160%'}}>
                      <li>
                       <b>Name : </b> {car.name}
                      </li>
                      <li>
                          <b>Person capacity : </b> {car.capacity} seats
                      </li>
                      <li>
                          <b>Fuel type : </b>{car.fuelType}
                      </li>
                  </ul>
                  </Col>
                 
                  <Col>
                  <ul>
                      <li>
                       
                      </li>
                  </ul>
                  </Col>
                  
              </Row>
              <Divider type="horizontal" style={{color:'yellow', background: '#f2dada73'}}>
                Choose the Renting time:
                
              </Divider>
              <RangePicker showTime={{format: 'HH:mm'}} fromat='DD MMM yyyy HH:mm' onChange={pickTime}/> 
              <br/>
              <button
                  className=" mt-2"
                  style={{fontWeight:'600', color:'green', borderRadius:'20px', padding:'5px'}}
                  onClick={() => {
                    setShowModal(true);
                  }}
                 >
                 See Booked Slots
              </button>
              {from && to &&(
                      <div style={{color:'white'}}>
                      <p>Total hours: <b>{totalHours} h.  </b> </p>
                      <p>Rent per hour: <b>{car.rentPerHour}  </b>BGN</p>
                      <Checkbox
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDriver(true);
                        } else {
                          setDriver(false);
                        }
                      }}
                    >
                      Need driver
                    </Checkbox>
                      <h4><b>Total amount: {totalAmount}</b></h4>
                      
                        
                      <StripeCheckout
                      shippingAddress
                      currency="BGN"
                       token={onToken}
                       amount = {totalAmount * 100}
                        stripeKey="pk_test_51L4CGDBt3mgghEGmutmrdE0dASUUEOKZMcxgh1V6lJS4MFYBx78EFHnFkYMMPf7KzBnQcSSFqR5SMxOpDL9Yow4C00GJXja7MQ">
                            <button className="btn1" >Rent Now</button>
                      </StripeCheckout>
                      
                 </div>
              )}


            </Col>
                {car.name && (
                  <Modal
                    visible={showModal}
                    closable={false}
                    footer={false}
                    title="Booked time slots"
                  >
                    <div className="p-2">
                      {car.bookedTimeSlots.map((slot) => {
                        return (
                          <button className=" mt-2"  >
                            {slot.from} - {slot.to}
                          </button>
                        );
                      })}

                      <div className="text-right mt-5">
                        <button
                         
                          onClick={() => {
                            setShowModal(false);
                          }}
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </Modal>
            )}
        </Row>
         
    </DefaultLayout>
  );
}

export default RentingCar;