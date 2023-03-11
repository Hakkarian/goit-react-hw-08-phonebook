import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { InputCss, PasswordCss } from "./Password.styled";

const Password = (password, handleChange) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(password)
  

    const handleClickShowPassword = () => setShowPassword(show => !show);
    const onMouseDownPassword = e => {
      e.preventDefault();
    };
    return (
      <InputCss
        id="filled-adornment-password"
        variant="filled"
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        required
        onChange={handleChange}
        endadornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={onMouseDownPassword}
              edge="end"
            >
            </IconButton>
          </InputAdornment>
        }
      />
    );
}

export default Password;