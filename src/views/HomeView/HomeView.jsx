import { CenterCss } from "components/App/App.styled";
import { HomeContainerCss, HomeTitleCss } from "./HomeView.styled"


const HomeView = () => {
    return (
      <CenterCss>
        <HomeTitleCss>Welcome, stranger!</HomeTitleCss>
      </CenterCss>
    );
}

export default HomeView;