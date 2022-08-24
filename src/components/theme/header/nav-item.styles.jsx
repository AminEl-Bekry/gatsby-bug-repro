import styled from "styled-components";
import { Link } from "gatsby";

export const NavLink = styled(Link)`
    font-size: 1.125rem;
    font-family: 'Barlow Semi Condensed';
    font-weight: 400;
    position: relative;
    transform: translateY(2px);

    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
            transform: translateY(-2px);
        }
    }

    &:not(:last-child) {
        margin-right: 25px;

        @media screen and (max-width: 899px) {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 899px) {
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid #272731;
    }
`