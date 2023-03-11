import styled from "@emotion/styled";
import { ButtonCss } from "components/App/App.styled";

export const ContactFormCss = styled.form`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  padding: 20px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  background-color: #313131;

  border-radius: 5px;

  transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px 3px #292929;
  }
`;

export const ContactLabelCss = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    max-width: 300px;
`

export const CreateButtonCss = styled(ButtonCss)`
  &:hover,
  &:focus {
    background-color: green;
  }
`;