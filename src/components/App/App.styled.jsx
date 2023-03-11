const { default: styled } = require("@emotion/styled");


export const Container = styled.div`
    padding: 100px 20px;
    margin: 0 auto;
`;

export const CenterCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const CenterHorizontalCss = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleCss = styled.h2`
  margin-bottom: 20px;
  color: #fff;
`;

export const FormCss = styled.form`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  border: 1px solid #fff;
  border-radius: 5px;
`;

export const ContactFlexCss = styled.div`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
`;

export const ButtonCss = styled.button`
  display: inline-block;
  max-width: 150px;
  padding: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  background-color: white;
  color: #070103;

  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px #0000005c;

  transition: color 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #000;
    color: #fff;
    box-shadow: 0px 0px 0px 0px #0000005c;
  }
  &:disabled {
    background-color: #000;
    color: #fff200;
  }
`;