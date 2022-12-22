import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const NavWraper = styled.div`
    background: #e70c0c;
    padding: 8px 9px;
    display:flex;
    position: fixed;
    width: 100%;
    top: 0;
`;
export const NavLink = styled(link)`
    dispaly:inline;
    margin:10px 10px;
    color:#fff;
    text-decoration:none;
    cursor:pointer;
`;
export const LoginNavWraper = styled.div`
    background: #e70c0c;
    padding: 8px 9px;
    flex:1;
    text-align:end
`;
export const NavLinkLogin = styled(link)`
    dispaly:inline;
    margin:10px 10px;
    text-align:end;
    color:#fff;
    text-decoration:none;
    cursor:pointer;
`;