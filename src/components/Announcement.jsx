import React from 'react';
import styled from 'styled-components';

function Announcement() {
  return (
    <Container>
        <Marquee direction='right'>
            Super deal! Free shipping on Orders over $100
        </Marquee>
    </Container>
  )
}

export default Announcement;

export const Container = styled.div`
  background-color: red !important;
  padding: 2px 0;
`;

export const Marquee = styled.marquee`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
`;