import styled from "@emotion/styled";
import { ButtonCss } from "components/App/App.styled";

export const ContactTextCss = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const DeleteButtonCss = styled(ButtonCss)`
  &:hover, &:focus {
    background-color: red;
  }
`