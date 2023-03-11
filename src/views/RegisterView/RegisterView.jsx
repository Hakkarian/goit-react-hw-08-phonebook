import { CenterCss, FormCss, TitleCss } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from 'redux/auth/auth-operations';
import { selectIsUserLogin } from 'redux/auth/auth-selectors';
import fields from 'shared/utils/fields';
import { useForm } from 'shared/utils/hooks';
import initialState from 'shared/utils/initialState';
import {
  AuthButtonCss,
  InputCss,
} from 'shared/components/Password/Password.styled';

const RegisterView = () => {
  const isLogin = useSelector(selectIsUserLogin);

  const handleSignup = data => {
    dispatch(signup(data));
  };

  const { state, handleChange, handleSubmit } = useForm(
    initialState,
    handleSignup
  );
  const { name, email, password } = state;
  console.log(state);

  const dispatch = useDispatch();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <CenterCss>
      <FormCss onSubmit={handleSubmit}>
        <TitleCss>Register</TitleCss>
        <InputCss {...fields.name} value={name} onChange={handleChange} />
        <InputCss {...fields.email} value={email} onChange={handleChange} />
        <InputCss
          {...fields.password}
          value={password}
          onChange={handleChange}
        />
        {/* <Password password={password} handleChange={handleChange} /> */}
        <AuthButtonCss>Sign up!</AuthButtonCss>
      </FormCss>
    </CenterCss>
  );
};

export default RegisterView;
