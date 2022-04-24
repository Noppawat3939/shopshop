import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));

  @media(max-width: ${({theme}) => theme.tablet}) {
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 2% 10%;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme}) => theme.fontColor.body};
  span {
    color: ${({theme}) => theme.fontColor.main};
    font-weight: 700;
  }

  @media(max-width:${({theme}) => theme.mobile}) {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 1rem auto 2rem;
`;

export const Flex = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.bgColor.body};
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 22px;
  padding: 3px;
  border: 1px solid lightgray;
  display: flex;

  svg {
    color: ${({theme}) => theme.fontColor.desc};
  }
`;