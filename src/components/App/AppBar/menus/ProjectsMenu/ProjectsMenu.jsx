import { useSelector } from "react-redux";
import { selectIsUserLogin } from "redux/auth/auth-selectors";
import { NavLinkCss } from "../../AppBar.styled";
import { ProjectsContainerCss } from "./ProjectsMenu.styled";

const ProjectsMenu = () => {
  const isLogin = useSelector(selectIsUserLogin);

  return (
    <ProjectsContainerCss>
      {isLogin && <NavLinkCss to="/contacts">Contacts</NavLinkCss>}
    </ProjectsContainerCss>
    );
}

export default ProjectsMenu;