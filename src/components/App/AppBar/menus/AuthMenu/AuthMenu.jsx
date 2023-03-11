import { NavLinkCss } from "../../AppBar.styled";
import { AuthContainerCss } from "./AuthMenu.styled";


const AuthMenu = () => {
    return (
      <AuthContainerCss>
        <NavLinkCss to="/login"><p>Sign in!</p></NavLinkCss>
        <NavLinkCss to="/registration">Sign up!</NavLinkCss>
      </AuthContainerCss>
    );
}

export default AuthMenu;