import { useState } from "react";

export const useForm = (initialState, onSubmit) => {
    const [state, setState] = useState({...initialState});

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value} = target;
            return { ...prevState, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState });
    }
    return {state, handleChange, handleSubmit}
}