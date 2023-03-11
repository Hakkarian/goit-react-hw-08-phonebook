import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsUserLogin, selectUser } from "redux/auth/auth-selectors";



const PublicView = () => {
    const auth = useSelector(selectUser);
    const isLogin = useSelector(selectIsUserLogin);
    if (isLogin && auth.token) {
      return <Navigate to="/contacts" />;
    }
    return <Outlet />;
}

export default PublicView;