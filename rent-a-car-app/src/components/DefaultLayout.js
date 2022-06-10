import React from 'react';

import { Menu, Dropdown, Button, Row, Col, Divider } from 'antd';
import {Link} from 'react-router-dom';
import './DefaultLayout.css'

function DefaultLayout(props){
    const user = JSON.parse(localStorage.getItem('user'))
   
    const menu = (
        <Menu>
          <Menu.Item>

            {user.role === 'user'? <a   href="/">Home</a>  :  <a   href="/admin" >Home</a>  }
       
          </Menu.Item>
          <Menu.Item>
          {user.role === 'user'? <a  href="/userbookings">My bookings</a> : <a  href="/userslist" >All users</a>   }
          
          </Menu.Item>
       
          <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
      );
      

   
  
    return (
        <div>
            <div className="header bs1">
              <Row gutter={16} justify='center'>
                <Col lg={20} sm={24} xs={24}>   
                  <div className="d-flex justify-content-between">

                        <h1 >
                          <Link to='/' style={{color:'black', textDecoration:'none'}}><img src= "/images/sitelogo.png" className='logo-image' /></Link>  
                          </h1>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Button>{user.username}</Button>
                        </Dropdown>


                  </div>
                </Col>
              </Row>
            
            </div>

            <div className="content">

               {props.children}


            </div>

            <div style={{background:'#081515a6 none repeat scroll 0% 0%', minHeight:'20vh',  color: 'white'}}  >
                <footer style={{paddingTop: '10px'}} >

                <div className="col-lg-4 col-md-12 mb-4 mb-md-0" style={{float: 'left', color: 'white'}}>
                  <p className="text-uppercase mb-4">About company</p>
          
                  <p style={{fontSize:'130%'}}>
                    We are well-known as Paradise Cars. We are offering one of the newest models of cars that you can rent.
                    We are on the market since 2006. 
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0"  style={{float: 'left'}} >
  
                  <ul className="fa-ul mb-4" >
                    <li className="mb-3">
                      <span class="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Plovdiv, Mladost 36, Bulgaria</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">paradise@example.com</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 359 88 35 08</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
                    </li>
                  </ul>
                 </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0" style={{float: 'left'}}>
                    <p className="text-uppercase mb-4">Opening hours</p>
            
                    <table className="table text-center text-white">
                      <tbody className="font-weight-normal">
                        <tr>
                          <td>Mon - Thu:</td>
                          <td>8am - 9pm</td>
                        </tr>
                        <tr>
                          <td>Fri - Sat:</td>
                          <td>8am - 1am</td>
                        </tr>
                        <tr>
                          <td>Sunday:</td>
                          <td>9am - 10pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Divider></Divider>
                 
                  <div className="text-center p-3" >
                 
                     © 2022 Copyright:
                      <p className="text-white text-center" >Teodora Tsaneva <br/> STD FMI</p>
                  </div>
                </footer>
            </div>
            

        </div>
    )
}

export default DefaultLayout;