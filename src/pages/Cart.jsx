import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context';
import CartItem from '../components/CartItem';
import { Container, Title, FlexCon, ButtonCon, Button, Total, TotalCon, PayCon, Pay } from '../styles/Cart_styled';
import {FaApplePay, FaGooglePay} from 'react-icons/fa';

function Cart() {
  const [total, setTotal] = useState();
  const {cartItems, removeItem} = useGlobalContext();

  useEffect(() => {
    setTotal(cartItems.reduce((sum,item) => {
      return sum + item.price
    }, 0))
  },[cartItems]);

  if(cartItems.length < 1) {
    return(
      <Container>
        <Title>Your cart is empty.</Title>
        <FlexCon />
        <ButtonCon>
          <Button
            to='/products'
            bg='transparent'
            color='#ff7f50'
          >
            continue shopping
          </Button>
          <Button
            to='/'
          >
            home
          </Button>
        </ButtonCon>
      </Container>
    )
  }

  return (
    <Container>
        <Title>Shopping Cart</Title>
        <FlexCon>
        {cartItems.map((cart) => {
          return(
            <CartItem 
              key={cart.id}
              cart={cart}
              removeItem={removeItem}
            />
          )
        })}
        <TotalCon>
          <Total>order total({cartItems.length})
            <span><small>: $</small>{total}</span>
          </Total>
          <PayCon>
            <Pay>
              <FaApplePay />
            </Pay>
            <Pay>
              <FaGooglePay/>
            </Pay>
          </PayCon>
        </TotalCon>
        </FlexCon>
        <ButtonCon>
          <Button
            to='/products'
            bg='transparent'
            color='#ff7f50'
          >
            continue shopping
          </Button>
          <Button
            to='/'
          >
            home
          </Button>
        </ButtonCon>
    </Container>
  )
}

export default Cart;