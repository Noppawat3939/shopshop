import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0,0,0,.35),rgba(0,0,0,.5));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .3s ease all;
  color: ${({theme}) => theme.fontColor.white};

  &:hover {
    backdrop-filter: blur(3px);
    -weblit-backdrop-filter: blur(3px);
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 17px;
  margin-bottom: 5px;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  border: 1.5px solid ${({theme}) => theme.borderColor.white};
  background-color: ${({theme}) => theme.bgColor.white};
  padding: 5px 10px;
  border-radius: 30px;
  transition: .3s ease-in-out;
  text-transform: uppercase;

  a {
    color: #000;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
  }

  &:hover {
      background-color: transparent;
  }

  &:hover > a {
    color: ${({theme}) => theme.fontColor.white};
  }
`;