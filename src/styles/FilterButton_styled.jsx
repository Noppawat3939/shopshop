import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 1px;
  border-radius: 30px;
  padding: 5px 10px;
  border: 1.5px solid ${({theme})=> theme.borderColor.main};
  color: ${({theme}) => theme.fontColor.main};

  @media(max-width:${({theme}) => theme.tablet}) {
    width: 60px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px;
  }

  @media(max-width:${({theme}) => theme.mobile}) {
    width: 50px;
    padding: 3px 6px;
    margin: 5px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  column-gap: 20px;

  @media(max-width:${({theme}) => theme.tablet}) {
      column-gap: 15px;
  }

  @media(max-width:${({theme}) => theme.mobile}) {
      column-gap: 10px;
      padding: 10px 0;
      flex-wrap: wrap;
  }
`;