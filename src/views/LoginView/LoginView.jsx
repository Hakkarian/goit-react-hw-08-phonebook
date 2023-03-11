import {
  ButtonCss,
  CenterCss,
  FormCss,
  TitleCss,
} from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signin } from 'redux/auth/auth-operations';
import { selectIsUserLogin } from 'redux/auth/auth-selectors';
import fields from 'shared/utils/fields';
import { useForm } from 'shared/utils/hooks';
import Password from 'shared/components/Password';
import {
  AuthButtonCss,
  InputCss,
  PasswordCss,
} from 'shared/components/Password/Password.styled';

const LoginView = () => {
  const isLogin = useSelector(selectIsUserLogin);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signin(data));
  };

  const { state, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    onSubmit
  );

  const { email, password } = state;

  console.log(state);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <CenterCss>
      <FormCss onSubmit={handleSubmit}>
        <TitleCss>Login</TitleCss>
        <InputCss {...fields.email} value={email} onChange={handleChange} />
        <InputCss
          {...fields.password}
          value={password}
          onChange={handleChange}
        />
        {/* <Password password={password} handleChange={handleChange} /> */}
        <AuthButtonCss>Sign in!</AuthButtonCss>
      </FormCss>
    </CenterCss>
  );
};

export default LoginView;
