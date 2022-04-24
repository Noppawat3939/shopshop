import React from 'react';
import { CartItemCon, ImageCon, Image, Title, Price, Button } from '../styles/CartItem_styled';

function CartItem({cart, removeItem}) {
    const {id, title, image, price} = cart;
  return (
    <CartItemCon>
        <ImageCon>
            <Image src={image} alt={title} />
        </ImageCon>
        <div>
        <Title>{title}</Title>
        <Price><small>$</small>{price}</Price>
        <Button
            onClick={() => removeItem(id)}>
            remove cart
        </Button>
        </div>
    </CartItemCon>
  )
}

export default CartItem;