import styled from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    transition: .3s all;
    background-color: ${({theme}) => theme.bgColor.header};
    box-shadow: ${({nav}) => nav ? '0 1px 5px 3px rgba(0,0,0,.07)' : 'none' };
`;

export const Wrap = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: 20px 25px 10px;
    }
`;

export const Left = styled.div`
    display: block;
`;

export const Right = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Logo = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;

    a {
        color: ${({theme}) => theme.fontColor.title};
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        font-size: 16px;
    }
`;

export const MenuItem = styled.li`
    cursor: pointer;
    transition: .3s ease-in-out;
    margin-left: 30px;
    font-size: 17px;
    list-style: none;
    color: ${({theme}) => theme.fontColor.body};

    svg {
        color: ${({theme}) => theme.fontColor.title};
    }

    &:hover,
    svg:hover {
        color: ${({theme}) => theme.fontColor.main};
    }

    &:nth-child(4) {
        position: relative;
    }

    small {
        background-color: ${({theme}) => theme.bgColor.main};
        position: absolute;
        top: -10px;
        right: -15px;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 20px;
        height: 20px;
        padding: 10px;
        color: ${({theme}) => theme.fontColor.white};
    }

    button {
        background-color: transparent;
    }

    button > svg {
        color: ${({theme}) => theme.fontColor.body};
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-left: 15px;
        font-size: 14px;

        &:nth-child(2) {
            display: none; 
        }
        &:nth-child(3) {
            display: none; 
        }
    }
`;