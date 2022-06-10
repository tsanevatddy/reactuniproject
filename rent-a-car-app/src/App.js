import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RentingCar from './pages/RentingCar';
import ErrorPage from './pages/ErrorPage';
import 'antd/dist/antd.min.css'; 
import ProtectedRoute from './pages/ProtectedRoute';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminPanel from './pages/AdminPanel';
import EditCar from './pages/EditCar';
import AdminRoute from './pages/AdminRoute';
import UsersRoute from './pages/UsersRoute';
import UsersList from './pages/users/users-list/UsersList';
import AddUser from './pages/users/userform/AddUser';
import EditUser from './pages/users/edituser/EditUser';








function App() {
  return (
    <Router>
        <Routes>

          <Route element={<UsersRoute/>}>
          <Route path="/" element={<Home/> }/>
          </Route>
        
        
         <Route path="/login" element={<Login/> }/>
         <Route path="register" element={<Register/> }/>

         <Route element={<UsersRoute/>} >
           <Route path="/renting/:carid" element={<RentingCar/>}/>
         </Route>

         <Route element={<UsersRoute/>} >
           <Route path="/userbookings" element={<UserBookings/>}/>
         </Route>
         <Route element={<AdminRoute/>} >
           <Route path="/addcar" element={<AddCar/>}/>
         </Route>
         

         <Route element={<AdminRoute/>} >
           <Route path="/admin" element={<AdminPanel/>}/>
         </Route>
         <Route element={<AdminRoute/>} >
          <Route path="/userslist" element ={<UsersList/>} />
         </Route>
         <Route element={<AdminRoute/>} >
          <Route path="/userslist" element ={<UsersList/>} />
         </Route>
         <Route element={<AdminRoute/>} >
           <Route path="/adduser" element ={<AddUser/>} />
         </Route>
         <Route element={<AdminRoute/>} >
            <Route path="/edituser/:userid" element={<EditUser/>}/>
         </Route>

         <Route element={<ProtectedRoute/>} >
           <Route path="/editcar/:carid" element={<EditCar/>}/>
         </Route>
        
         <Route path="*" element ={<ErrorPage/>} />
       
        


        </Routes>
    </Router>
   
  );
}



export default App;

