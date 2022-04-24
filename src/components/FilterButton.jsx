import React from 'react';
import { Button, Container } from '../styles/FilterButton_styled';

function FilterButton({allCategories, filterItems}) {

  return (
    <Container>
        {allCategories.map((cate, idx) => {
            return <Button key={idx} onClick={() => filterItems(cate)} >{cate}</Button>
        })}
    </Container>
  )
}

export default FilterButton;