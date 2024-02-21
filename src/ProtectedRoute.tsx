import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from './components/Auth/auth';


const ProtectedRoute = () => {
   
    return(
        isAuthenticated() ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoute;