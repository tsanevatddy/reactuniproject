import axios from "axios";
import { message } from "antd";
export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type: 'LOADING', payload: true})
    try {
        const response = await axios.post('/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        const user = JSON.parse(localStorage.getItem("user"));
        message.success('Login was successfull!')
        dispatch({type: 'LOADING', payload: false})
        setTimeout(()=>{
            if(user.role === "admin"){
                window.location.href='/admin'
            }
           if(user.role === "user"){
            window.location.href='/'
           }
       
           
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong!')
        dispatch({type: 'LOADING', payload: false})
    }

}
export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type: 'LOADING', payload: true})
    try {
        const response = await axios.post('/api/users/register', reqObj)
        message.success('Registration was successfull!')
        setTimeout(()=>{
            window.location.href='/login'
           
        }, 500);
        
       
        dispatch({type: 'LOADING', payload: false})
        message.success('Registration was successfull!')
    } catch (error) {
        console.log(error)
        message.error('Something went wrong!')
        dispatch({type: 'LOADING', payload: false})
    }

}

export const getAllUsers =() =>async dispatch=>{

    dispatch({type: 'LOADING', payload: true})
    try {
        const response = await axios.get('/api/users/getallusers')
        dispatch({type: 'GET_ALL_USERS', payload:response.data })
        dispatch({type: 'LOADING', payload: false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING', payload: false})
    }
}

export const addUser=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/users/adduser' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New user was added successfully')
         setTimeout(() => {
            window.location.href='/userslist'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editUser=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/users/edituser' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('User details updated successfully')
         setTimeout(() => {
            window.location.href='/userslist'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteUser=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/users/deleteuser' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('User was deleted successfully!')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}