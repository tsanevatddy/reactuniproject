import { Navigate, Outlet } from "react-router-dom";

function AdminRoute(props){
     
    const user = JSON.parse(localStorage.getItem("user"));
    
    if(user){
        return user?.role === "admin"?<Outlet/> : <Navigate to="/" />;
    }
    else{
        return <Navigate to = "/login"/>;
    }
       
}

export default AdminRoute;