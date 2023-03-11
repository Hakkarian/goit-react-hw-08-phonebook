
import {LineWave} from 'react-loader-spinner'
import { selectError, selectIsLoading } from "redux/tasks/cont-selectors";
import { useSelector } from "react-redux";
import { SpinnerCss } from './Spinner.styled';
import { selectIsUserLoads } from 'redux/auth/auth-selectors';

const Spinner = () => {
    const isLoading = useSelector(selectIsUserLoads);
    const error = useSelector(selectError);
    return <>
        {error && <h1>An error occured while rendering your page</h1>}
        
        {isLoading && <LineWave 
            position="absolute"
    height = "800"
    width = "800"
    radius = "9"
    color = "black"
    ariaLabel = "loading"
    wrapperStyle
    wrapperClass
        />}

    </>
}

export default Spinner
