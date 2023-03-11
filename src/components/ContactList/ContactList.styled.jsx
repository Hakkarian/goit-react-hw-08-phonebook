import styled from "@emotion/styled";


export const ContactUlCss = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 30px;

    flex-wrap: wrap;
`

export const ContactItemCss = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  min-width: calc(50% - 2 * 20px);
  height: 60px;
  padding: 10px;

  background-color: #313131;
  color: #fff;

  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #303030;

  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #000;
    box-shadow: 0px 0px 0px 0px #303030;
  }
`;