import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <>
      <Container>
      <Loader></Loader>
      </Container>
    </>
  )
}

export default Loading;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = styled.div`
  border: 15px solid #fff !important;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.08);
  border-radius: 50%;
  border-top: 15px solid #FF7f50 !important;
  width: 100px;
  height: 100px;
  animation: spinner 2s linear infinite;

  @keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`;