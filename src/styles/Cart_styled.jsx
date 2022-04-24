import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-bottom: 2rem;
  color: ${({theme}) => theme.fontColor.body};
`;

export const Title = styled.h1`
  font-size: 24px;
  letter-spacing: 2px;
  text-align: center;
  margin: 1.5rem 0;
  font-weight: 600;
  flex: 1;
`;

export const FlexCon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 1rem auto;
  min-height: 10vh;
`;

export const ButtonCon = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const Button = styled(NavLink)`
  background-color: ${({ bg }) => bg || '#ff7f50'};
  color: ${({color}) => color || '#fff'};
  padding: 7px 15px;
  border: 1.5px solid ${({theme}) => theme.borderColor.main};
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  border-radius: 50px;
`;

export const TotalCon = styled.div`
  border-top: 1px solid ${({theme}) => theme.borderColor.body};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Total = styled.h4`
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 2px;
  
  span {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 0;
  }
`;

export const PayCon = styled.div`
  display: flex;
  column-gap: 15px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const Pay = styled.button`
  width: 60px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  transition: .3s ease-in-out;
  border-radius: 50px;
  color: ${({theme}) => theme.fontColor.main};
  border: 1.5px solid ${({theme}) => theme.borderColor.main};

  :hover {
    background-color: ${({theme}) => theme.bgColor.main};
    color: ${({theme}) => theme.fontColor.white};
  }
`;