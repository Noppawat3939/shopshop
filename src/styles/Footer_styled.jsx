import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgColor.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: ${({theme}) => theme.fontColor.white};

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const Desc = styled.p`
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 300;
  opacity: .6;

  span {
    font-weight: 500;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
        font-size: 10px;
    }
`;

export const LinkIcon = styled.a`
  margin: 0 15px;
  font-size: 18px;
  color: ${({theme}) => theme.fontColor.white};
  border: 1px solid transparent;

  @media(max-width: ${({theme}) => theme.tablet}) {
        font-size: 14px;
    }
`;

export const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;

    @media(max-width: ${({theme}) => theme.tablet}) {
        font-size: 1rem;
        font-weight: 600;
    }
`;