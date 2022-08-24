import React from 'react'
import { Link } from 'gatsby'

import { DropdownContainer } from './dropdown-menu.styles'
import './dropdown-menu.scss'
// import { RiArticleLine } from "@react-icons/all-files/ri/RiArticleLine";
import { IoHelpBuoyOutline } from "@react-icons/all-files/io5/IoHelpBuoyOutline";
import { BiHelpCircle } from "@react-icons/all-files/bi/BiHelpCircle";

// BELOW IS THE BLOG LINK - ADD BACK AS LAST LINK IN DROPDOWN ONCE WE FIX THE BLOG
            // <li>
            //     <Link to='/blog'>
            //         <RiArticleLine className='dropdown-menu-icon' />
            //         The Qiwio Insider Blog
            //     </Link>
            // </li>

const DropdownMenu = () => {
    return (
        <DropdownContainer >
            <li>
                <a href='https://qiwioab.zendesk.com/hc/en-us' target='_blank' rel="noreferrer">
                    <IoHelpBuoyOutline className='dropdown-menu-icon' />
                    Help Center
                </a>
            </li>
            <li>
                <Link to='/contact-support'>
                    <BiHelpCircle className='dropdown-menu-icon' />
                    Contact Support
                </Link>
            </li>
        </DropdownContainer>
    )
}
export default DropdownMenu