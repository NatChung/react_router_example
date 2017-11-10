import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => (
    <ul>
        <li>
            <NavLink exact activeClassName='active' to='/home' >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/about' >
                About
            </NavLink>
        </li>
    </ul>
)

export default Nav;