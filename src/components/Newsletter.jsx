import React from 'react';
import {Container, Title, Desc, InputContainer, Input, Icon } from '../styles/Newslsetter_styled';

function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products</Desc>
        <InputContainer>
            <Input placeholder='Your email' type='email'/>
            <Icon />
        </InputContainer>
    </Container>
  )
}

export default Newsletter;