import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.button`
  width: max-content;
  height: max-content;
  border: 0;
  background-color: transparent;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: ${props => props.direct === 'left' && '20px'};
  right: ${props => props.direct === 'right' && '20px'};
  margin: auto;
  z-index: 10;
  
  svg {
    color: ${({theme}) => theme.fontColor.white};
    opacity: .7;
  }

  svg:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: .4s all ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  flex: 1;
  position: relative;
`;

export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: ${({theme}) => theme.fontColor.white};
  text-shadow: 0 0 5px  rgba(0,0,0,.25);

  @media(max-width: ${({theme}) => theme.mobile}) {
    max-width: 80%;
    margin: auto;
  }

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 2rem;
  }
`;

export const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-weight: 500;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  width: max-content;
  font-weight: 600;
  text-shadow: 0 1px 4px rgba(0,0,0,.2);
  font-size: 13px;
  text-transform: uppercase;

  a {
    color: ${({theme}) => theme.fontColor.white};
  }
`;