import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90%;
    max-height: max-content;
    margin: 2rem auto 3rem;
    background-color: ${({theme}) => theme.bgColor.white};
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 8px 2px rgba(0,0,0,.05);
`;

export const Title = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 24px;

  @media (max-width: ${({theme}) => theme.tablet}) {
    font-size: 18px;
  }
`;

export const ImageCon = styled.div`
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: ${({theme}) => theme.tablet}) {
    max-width: 80%;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    max-width: 60%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Span = styled.span`
  padding: 5px 10px;
`;

export const Category = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  margin: 5px 0;
  display: inline-block;
  background-color: ${({theme}) => theme.bgColor.main_light};
  border-radius: 3px;
  padding: 3px 5px;
  color: ${({theme}) => theme.fontColor.white};
`;

export const Price = styled.h5`
  font-size: 24px;
  color: ${({theme}) => theme.fontColor.main_alt};
  margin-bottom: 5px;
`;

export const Rate = styled.h6`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 14px;

  svg {
    color: #FFC312 !important;
    font-size: 18px;
  }
`;

export const Count = styled.h6`
  font-weight: 600;
  font-size: 13px;
`;

export const Desc = styled.p`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 22px;
  margin-top: 20px;
  color: ${({theme}) => theme.fontColor.body};
  padding: 5px;
  word-break: break-all;
  line-height: 1.8rem;
  border-radius: 5px;
  background-color: ${({theme}) => theme.bgColor.body};

  @media (max-width: ${({theme}) => theme.tablet}) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
    font-weight: 600;
    background-color: transparent;
    border-radius: 30px;
    border: 1.5px solid ${({theme}) => theme.borderColor.main};
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);

  a {
    color: ${({theme}) => theme.fontColor.main};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media(max-width:${({theme}) => theme.mobile} ) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;