import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUpdate } from "redux/auth/auth-operations";



const AuthCover = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUpdate());
    }, [])

    return <>{children}</>
}

export default AuthCover;