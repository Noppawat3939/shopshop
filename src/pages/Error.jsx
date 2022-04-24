import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {BiErrorCircle, BiHomeAlt} from 'react-icons/bi';

function Error() {
  return (
    <Container>
        <Title>page not found<BiErrorCircle/></Title>
        <Desc>
        Oops! The page you were looking for couldn't be found. You can navigate through our menu
        </Desc>
        <Button to='/'>Home <BiHomeAlt/></Button>
    </Container>
  )
}

export default Error;

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${({theme}) => theme.fontColor.body};
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Desc = styled.p`
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 20px;
`;

export const Button = styled(NavLink)`
  background-color: ${({theme}) => theme.bgColor.main};
  font-weight: 700;
  color: ${({theme}) => theme.fontColor.white};
  padding: 8px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;