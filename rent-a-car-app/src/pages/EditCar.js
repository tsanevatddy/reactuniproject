import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col , Row , Form , Input} from 'antd'
import DefaultLayout from '../components/DefaultLayout'
import { addCar, getAllCars, editCar } from '../redux/actions/carsAction'
import { useParams } from "react-router-dom";

function EditCar({match}) {

     const dispatch = useDispatch();
     const [car, setcar] = useState({});
     const params = useParams();

     const { cars } = useSelector((state) => state.carsReducer);
     const [totalCars, setTotalCars] = useState([]);
    // const {loading} = useSelector(state=>state.alertsReducer)

    useEffect(()=>{
        if (cars.length == 0) {
            dispatch(getAllCars());
          } else {
            setTotalCars(cars)
            setcar(cars.find((o) => o._id == params.carid));
          }
        }, [cars]);
  

    function onFinish(values){

         values._id = car._id;

          dispatch(editCar(values));
         console.log(values);
    }

    return (
        <DefaultLayout>
              
               <Row justify='center mt-5'>
                   <Col lg={8} sm={24} xs={24} className='p-2'>
                     {totalCars.length > 0  &&(  <Form  initialValues={car} className='bs1 p-2' layout='vertical' onFinish={onFinish} style={{background: '#5a262666'}} >
                           <h3>Edit Car</h3>
                           <hr />
                           <Form.Item name='name' label='Car name:' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url:' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerHour' label='Rent per hour:' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='capacity' label='Capacity:' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Fuel Type:' rules={[{required: true}]}>
                               <Input/>
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

export default EditCar;