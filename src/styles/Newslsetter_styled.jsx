import styled from 'styled-components';
import {BiMailSend} from 'react-icons/bi';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  letter-spacing: 3px;
  color: ${({theme}) => theme.fontColor.title};
`;

export const Desc = styled.p`
  text-align: center;
  margin: 15px 0;
  font-weight: 300;
  color: ${({theme}) => theme.fontColor.desc};
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    border: 1.5px solid lightgray;
    padding: 8px 15px;
    border-radius: 50px;
    margin: 0 auto 2rem;
`;

export const Input = styled.input`
    padding: 0 5px;
    background-color: transparent;
    outline: none;
    height: 100%;
    border: 0;
    color: ${({theme}) => theme.fontColor.body};

    ::placeholder {
        letter-spacing: 1.5px;
        font-weight: 200;
        color: ${({theme}) => theme.fontColor.desc};
    }
`;

export const Icon = styled(BiMailSend)`
  color: ${({theme}) => theme.fontColor.main};
  font-size: 20px;
  margin-left: 10px;
`;