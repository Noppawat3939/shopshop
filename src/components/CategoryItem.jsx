import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Image, Info, Title, Button } from '../styles/CategoryItem_styled';

function CategoryItem({item}) {
    
  return (
    <Container>
        <Image src={item.image} />
        <Info>
            <Title>{item.title}</Title>
            <Button >
                <NavLink to='/products'>shop now</NavLink>
            </Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;