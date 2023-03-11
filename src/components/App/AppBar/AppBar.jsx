
import { useSelector } from "react-redux";
import { selectIsUserLogin } from "redux/auth/auth-selectors";
import { HeaderCss, NavLinkCss } from "./AppBar.styled";
import AuthMenu from "./menus/AuthMenu";
import ProjectsMenu from "./menus/ProjectsMenu";
import UserMenu from "./menus/UserMenu";
import logo from  '../../../images/170.png'
import { Link } from "react-router-dom";

const AppBar = () => {
  const isLogin = useSelector(selectIsUserLogin)

    return (
      <HeaderCss>
        <Link to="/">
          <img src={logo} alt="Global Transform" width="50" />
        </Link>

        <ProjectsMenu />
        {!isLogin ? <AuthMenu /> : <UserMenu />}
      </HeaderCss>
    );
}

export default AppBar;