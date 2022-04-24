import React from 'react';
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import { Container, Desc, LinkIcon, Title } from '../styles/Footer_styled';

function Footer() {
  return (
    <Container>
        <Title>shopshop</Title>
        <Desc>
            Developed by <span>Noppawat3939</span>
        </Desc>
        <div>
        <LinkIcon
          href='https://www.linkedin.com/in/noppawat-chochaipantawong-659180214/'
          target='_blank'
        >
            <FiLinkedin />
        </LinkIcon>
        <LinkIcon
          href='https://github.com/Noppawat3939'
          target='_blank'
        >
            <FiGithub />
        </LinkIcon>
        </div>
    </Container>
  )
}

export default Footer;