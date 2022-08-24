import styled from "styled-components";
import { Link } from "gatsby";

const QiwioPink = '#ff5679'


export const AlertBar = styled.div`
    background-color: ${QiwioPink};
    display: flex;
    justify-content: center;
    padding: 8px 0;

    h5 {
        text-align: center;

        @media screen and (max-width: 900px) {
            font-size: .875rem;
        }
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;

    @media screen and (min-width: 900px) {
        padding: 30px 50px;
    }
`
export const LogoContainer = styled.div`
    z-index: 10;
    min-width: 33%;
`

export const LinkContainer = styled.div`
    display: none;

    @media screen and (min-width: 900px) {
        display: flex;
    }
`
export const NavLinks = styled(Link)`
    color: white;
    font-size: 1.125rem;
    font-family: 'Barlow Semi Condensed';
    font-weight: 400;
    text-decoration: none;

    &:hover {
        color: #ff5679;
    }

    &:not(:last-child) {
        margin-right: 25px;
    }
`
export const BtnContainer = styled.div`
    display: none;

    @media screen and (min-width: 900px) {
        display: flex;
        align-items: center;
        min-width: 33%;
        justify-content: end;
    }
`
export const LogInBtn = styled(Link)`
    color: white;
    font-size: 1.125rem;
    font-family: 'Barlow Semi Condensed';
    text-decoration: none;
    transition: all .4s;

    &:hover {
        transform: translateY(-5px);
    }
`
export const GetStartedBtn = styled(Link)`
    background-color: ${QiwioPink};
    color: white;
    border: 1px solid ${QiwioPink};
    border-radius: 4px;

    font-family: 'Barlow Semi Condensed';
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    margin-left: 20px;
    transition: all .4s;

    &:hover {
        transform: translateY(-5px);
    }
`