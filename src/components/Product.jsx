import React from 'react';
import { ProductContainer, ImageCon, Image, Span, Title, Category, Flex, Price, Navlink, Button } from '../styles/Product_styled';
import { Rate } from '../styles/SingleProduct_styled';
import {AiFillStar} from 'react-icons/ai';
import {BsHandbagFill} from 'react-icons/bs';
import { useGlobalContext } from '../context';

function Product({product, listItem}) {
  const {addItem} = useGlobalContext();
  const {id, image, title, category, price, rating} = product;
  const rateIcon = Math.floor(rating?.rate) ;

  return (
    <>
      <ProductContainer  listItem={listItem} >
          <ImageCon listItem={listItem} >
            <Image src={image} />
          </ImageCon>
          <Span listItem={listItem}>
            <Title listItem={listItem}>{title}</Title>
            <Category listItem={listItem}>{category}</Category>
              <div style={{display: 'flex'}}>
                {Array(rateIcon).fill().map((_,idx) => (
                  <Rate key={idx}><AiFillStar/></Rate>
                ))}
              </div>
              <Flex listItem={listItem} >
                <Price listItem={listItem}>${price}</Price>
                <Navlink to={`product/${id}`}>more</Navlink>
              </Flex>
              <Button onClick={() => addItem(product)} listItem={listItem} >Add to Cart <BsHandbagFill/></Button>
          </Span>
      </ProductContainer>
    </>
  )
}

export default Product;