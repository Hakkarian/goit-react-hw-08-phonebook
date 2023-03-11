import { ButtonCss, TitleCss } from "components/App/App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/auth/auth-operations";
import { selectUser } from "redux/auth/auth-selectors";
import { UserContainerCss, UserTitle } from "./UserMenu.styled";


const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }

    return <UserContainerCss>
        <UserTitle>Glad to see you here, {name}</UserTitle>
        <ButtonCss type="button" onClick={handleLogout}>Logout</ButtonCss>
    </UserContainerCss>
}

export default UserMenu;