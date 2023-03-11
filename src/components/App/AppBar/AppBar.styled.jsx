import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderCss = styled.header`
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #313131;
`

export const NavLinkCss = styled(NavLink)`
  position: relative;

  padding: 10px 0px;


  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #fff;

  transition: color 250ms linear;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    margin-top: 3px;
    background-color: yellow;
    transform: scale(0);

    transition: transform 250ms linear;
  }
  &:hover::after, &:focus::after, &.active::after {
    transform: scale(1);
  }


  &.active {
    color: yellow;
  }
`;