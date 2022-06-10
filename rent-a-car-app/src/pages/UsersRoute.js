import { Navigate, Outlet } from "react-router-dom";

function UsersRoute(props){
     
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
        return user?.role === "user"?<Outlet/> : <Navigate to="/admin" />;
    }
    else{
        return <Navigate to = "/login"/>;
    }
}

export default UsersRoute;