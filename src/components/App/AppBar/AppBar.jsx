
import { useSelector } from "react-redux";
import { selectIsUserLogin } from "redux/auth/auth-selectors";
import { HeaderCss, NavLinkCss } from "./AppBar.styled";
import AuthMenu from "./menus/AuthMenu";
import ProjectsMenu from "./menus/ProjectsMenu";
import UserMenu from "./menus/UserMenu";

const AppBar = () => {
  const isLogin = useSelector(selectIsUserLogin)

    return (
      <HeaderCss>
        <NavLinkCss to="/">
          <img src="../../../images/170.png" alt="Global Transform" width="50" />
        </NavLinkCss>

        <ProjectsMenu />
        {!isLogin ? <AuthMenu /> : <UserMenu />}
      </HeaderCss>
    );
}

export default AppBar;