import React from 'react';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Loading from '../components/Loading';
import FilterButton from '../components/FilterButton';
import {BsGrid3X3Gap, BsListUl} from 'react-icons/bs';
import { useGlobalContext } from '../context';
import { Flex, Title, Button, Container, GridContainer, FlexContainer } from '../styles/Products_styled';

function Products() {
  const {allProduct, loading, allCategories, filterItems, listItem, setListItem} = useGlobalContext();

  if(loading) {
    return <Loading />
  }
    
  return (
    <>
        <Flex>
          <Title>All product <span>{allProduct.length}</span></Title>
          <FilterButton
            allCategories={allCategories}
            filterItems={filterItems}
          />
          <Button
            onClick={() => setListItem(!listItem)}
          >
            {listItem ? <BsListUl /> : <BsGrid3X3Gap/>}
          </Button>
        </Flex>
        <Container>
          {listItem ? 
            <GridContainer>
              {allProduct.map((product) => {
                return (
                <Product
                  product={product}
                  listItem={listItem}
                  key={product.id}
                />
                )
              })}
            </GridContainer>
            :
            <FlexContainer>
              {allProduct.map((product) => {
                return (
                <Product
                  product={product}
                  listItem={listItem}
                  key={product.id}
                />
                )
              })}
            </FlexContainer>
          }
        </Container>
        <Footer/>
    </>
  )
}

export default Products;