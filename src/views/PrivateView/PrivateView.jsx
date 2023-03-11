import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsUserLogin, selectUser } from "redux/auth/auth-selectors";


const PrivateRoute = () => {
    const auth = useSelector(selectUser);
    const isLogin = useSelector(selectIsUserLogin);
    
    if (!isLogin && !auth.token) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default PrivateRoute;