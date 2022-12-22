import styled from "styled-components";
import { NavLink as link } from 'react-router-dom'

export const Wrapper = styled.div`
    top: 15%;
    left: 15%;
    right: 15%;
    bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`;
export const Content = styled.div`
    max-width: 600px;
    text-align: center;
`;

export const Header2 = styled.h2`
    font-size: 18vw;
    line-height: 1em;
    margin-top: 65px;
    margin-bottom: 53px;
    :after{
        position: absolute;
        content: attr(data-text);
        top: 0;
        left: 0;
        right: 0;
        background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
        background-size: 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 1px 1px 2px rgba(255,255,255,0.25);
        animation: animate 10s ease-in-out infinite;
      }
`;

export const Header4 = styled.h4`
    font-size: 1.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000;
    font-size: 2em;
    max-width: 600px;
    :after{
        position: absolute;
        content: attr(data-text);
        top: 0;
        left: 0;
        right: 0;
        text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
`;

export const Text = styled.p`
    font-size: 1.2em;
    color: #0d0d0d;
`;

export const NavLinkWrapper = styled.div`
    margin: 25px 0;
    display: inline-flex;
`;

export const NavLink = styled(link)`
    display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #e70c0c;
  color: #e70c0c;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  :hover{
    background: #e70c0c;
    color: #fff;
  }
`;