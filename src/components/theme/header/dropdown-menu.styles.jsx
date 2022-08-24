import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: absolute;
    bottom: -110px;
    left: -50%;

    background-color: #272731;
    min-width: max-content;
    padding: 20px;
    border-radius: 10px;

    @media screen and (max-width: 899px) {
        display: block;
        position: relative;
        bottom: 0;
        left: 0;
        background-color: transparent;
    }

    li {
        list-style: none;

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    a {
        color: white;
        font-size: 1rem;

        &:hover {
            color: #ff5679;
        }
    }
`