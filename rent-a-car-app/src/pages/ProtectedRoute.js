import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props){
     
      

        return localStorage.getItem('user')? <Outlet/> : <Navigate to="/login" />;

    
}

export default ProtectedRoute;