import React, {useState} from 'react'
import { Link } from 'gatsby'

import { NavLink } from './nav-item.styles'

import './nav-item.scss'


const NavItem = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <NavLink>
            <Link to={props.link} onClick={() => setOpen(!open)}>
                <span className='navlink-text'>{props.text}</span>
                <span className={open ? 'navlink-icon-open' : 'navlink-icon'}>{props.icon}</span>
            </Link>

            {open && props.children}
        </NavLink>
    )
}
export default NavItem