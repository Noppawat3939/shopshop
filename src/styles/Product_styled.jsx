import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.bgColor.white};
  padding: 10px 20px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,.035);
  border: 1.5px solid ${({theme}) => theme.borderColor.white};
  transition: .3s ease-in-out;
  display: flex;
  flex-direction: ${({listItem}) => listItem ? 'column' : 'row'};

  &:hover {
    border: 1.5px solid ${({theme}) => theme.borderColor.body};
  }
`;

export const Title = styled.h4`
  margin-top: 10px;
  font-size: ${({listItem}) => listItem ? '13px' : '16px'};
  letter-spacing: 1.5px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: ${({listItem}) => listItem ? '13px' : '13px'};
  }
`;

export const Price = styled.h4`
  font-weight: 400;
  font-size: ${({listItem}) => listItem ? '16px' : '18px'};

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 18px;
  }
`;

export const Category = styled.h5`
  font-size: ${({listItem}) => listItem ? '11px' : '13px'};
  text-transform: uppercase;
  color: ${({theme}) => theme.fontColor.main};
  letter-spacing: 1px;
  font-weight: 700;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 10px;
  }
`;

export const ImageCon = styled.div`
  max-width: 300px;
  margin: ${({listItem}) => listItem ? 'auto' : 'auto 1rem'};
  height: ${({listItem}) => listItem ? '200px' : '300px'};

  @media(max-width: ${({theme}) => theme.mobile}) {
    max-width: 150px;
  }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain !important;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({listItem}) => listItem ? 'center' : 'flex-start'};
  flex-direction: ${({listItem}) => listItem ? 'none' : 'column'};
`;

export const Navlink = styled(NavLink)`
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    color: ${({theme}) => theme.fontColor.main_alt};
    transition: .2s ease-in-out;
    border-radius: 30px;
    margin-top: ${({listItem}) => listItem ? '0' : '20px'};

    &:hover {
    color: ${({theme}) => theme.fontColor.desc};
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 10px;
  max-width: ${({listItem}) => listItem ? '100%' : '100%' };
  margin: ${({listItem}) => listItem ? '0' : 'auto'};
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.bgColor.main};
  color: ${({theme}) => theme.fontColor.white};
  border: 1.5px solid ${({theme}) => theme.borderColor.main};
  max-width: ${({listItem}) => listItem ? '100%' : 'max-content'};
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  border-radius: 50px;
  transition: .3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${({theme}) => theme.fontColor.main};
  }
`;