import { Navigate } from "react-router-dom";

const ErrorView = () => {
    // return <CenterCss><TitleCss>Unacceptable! Looks like your adress is not correct. <br /> Please, enter the correct url or consider signing up instead.</TitleCss></CenterCss>
    return <Navigate to="/" />
}

export default ErrorView;