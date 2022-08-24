import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// styles
import "./header.scss"

import { RiSunFill } from "@react-icons/all-files/ri/RiSunFill";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";

import {
    Nav,
    LogoContainer,
    LinkContainer,
    NavLinks,
    BtnContainer,
    LogInBtn,
    GetStartedBtn
} from './header.styles'

import NavItem from './nav-item';
import DropdownMenu from './dropdown-menu';

const Header = () => {
    return (
        <div>
            {/*
            <a
                href="https://open.spotify.com/episode/6QQYp8wO4qPNsCOW2DlLJE?si=zq3-fm2oRv-XadAK4OcNWw&nd=1"
                target='_blank'
                rel='noreferrer'
                >
                <AlertBar>
                    <h5>Qiwio has recently been featured in the Swedish eCommerce podcast 'ehandelstrender' - Click here to listen on Spotify</h5>
                </AlertBar>
            </a>
            */}

            <Nav>
                <LogoContainer>
                <Link to='/'>
                    <StaticImage
                        src='../../../images/logos/Qiwio Logo.svg'
                        alt='Qiwio logo'
                        loading='eager'
                        width={100}
                        placeholder='none'
                    />
                </Link>
            </LogoContainer>

            <LinkContainer>
                <NavItem link='#' icon={<BiChevronDown />} text='Resources'>
                    <DropdownMenu />
                </NavItem>
                <NavLinks to='/contact-sales'>Contact Sales</NavLinks>
                <NavLinks to='/pricing'>Pricing</NavLinks>
                <NavLinks to='/careers/full-stack-developer'>Jobs</NavLinks>
            </LinkContainer>

            <BtnContainer>
                <LogInBtn to='https://app.qiwio.io/Account/Login' target='_blank'>Log in</LogInBtn>
                <GetStartedBtn to='/contact-sales'>Get started</GetStartedBtn>
                <RiSunFill className='theme-icon' size={20}/>
            </BtnContainer>

            </Nav>
        </div>
    )
}

export default Header