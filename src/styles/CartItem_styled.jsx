import styled from 'styled-components';

export const CartItemCon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: ${({theme}) => theme.bgColor.white};
  color: #111 !important;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 0 3px 2px rgba(0,0,0,.03);

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    row-gap: 20px;
    text-align: center;
  }
`;

export const ImageCon = styled.div`
  max-width: 200px;
  height: auto;

  @media(max-width: ${({theme}) => theme.mobile}) {
    max-width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Price = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.bgColor.main};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 6px;
  border-radius: 3px;
  color: ${({theme}) => theme.fontColor.white};
`;