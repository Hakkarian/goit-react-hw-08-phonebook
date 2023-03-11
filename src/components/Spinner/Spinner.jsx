
import {LineWave} from 'react-loader-spinner'
import { selectError, selectIsLoading } from "redux/tasks/cont-selectors";
import { useSelector } from "react-redux";
import { SpinnerCss } from './Spinner.styled';
import { selectIsUserLoads } from 'redux/auth/auth-selectors';

const Spinner = () => {

    return <LineWave 
    height = "800"
    width = "800"
    radius = "9"
    color = "yellow"
    ariaLabel = "loading"
    wrapperStyle
    wrapperClass
        />


}

export default Spinner
