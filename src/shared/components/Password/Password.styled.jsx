import styled from '@emotion/styled';
import { OutlinedInput, TextField } from '@mui/material';
import { ButtonCss } from 'components/App/App.styled';

export const InputCss = styled(TextField)`
  margin-bottom: 20px;
  color: orange;
  text-align: center;

  &.MuiFormLabel-root {
    color: orange;
  }

  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: orange;
  }
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    border-bottom: 1px solid #000;
  }
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 1px dashed orange;
  }
`;

export const PasswordCss = styled(OutlinedInput)`

`;

export const AuthButtonCss = styled(ButtonCss)`
    margin-top: 20px;
`;

