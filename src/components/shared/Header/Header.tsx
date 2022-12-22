import React from 'react'
import {NavLink,NavWraper,NavLinkLogin,LoginNavWraper} from './Header.style'

export default function Header() {
  return (
    <NavWraper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Contact Us</NavLink>
        <LoginNavWraper>
          <NavLinkLogin to="/login">Login</NavLinkLogin>
          <NavLinkLogin to="/signup">Signup</NavLinkLogin>
        </LoginNavWraper>
    </NavWraper>
  )
}