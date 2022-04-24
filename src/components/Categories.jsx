import React from 'react';
import styled from 'styled-components';
import { CategoriesData } from '../data/data';
import CategoryItem from './CategoryItem';

function Categories() {

  return (
    <Container>
        {CategoriesData.map((item,idx) => {
            return <CategoryItem key={idx} item={item} />
        })}
    </Container>
  )
}

export default Categories;

export const Container = styled.div`
  padding: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));

  @media(max-width: ${({theme}) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
  }
`;