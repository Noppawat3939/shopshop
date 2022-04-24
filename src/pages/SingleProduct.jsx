import React,{useState, useEffect} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { Container, Grid, ImageCon, Image, Span, Title, Rate, Count, Desc, Category, Price, Button } from '../styles/SingleProduct_styled';
import { useGlobalContext } from '../context';
import {AiFillStar} from 'react-icons/ai';

const URL = 'https://fakestoreapi.com/products/'

function SingleProduct() {
  const {loading, setLoading} = useGlobalContext();

    const {id} = useParams();
    const [item, setItem] = useState([]);

    const fetchProduct = async() => {
      const resp = await fetch(`${URL}${id}`);
      const data = await resp.json();

      if(data) {
        setItem(data)
        setLoading(false);
      }
      else {
        setItem([])
        setLoading(false);
      }
    }
    useEffect(() => {
        fetchProduct();
    }, [id]);

    if(loading) {
        return <Loading />
    }

    const {
      title,
      category,
      description,
      image,
      price,
      rating
    } = item;

  return (
    <>
      <Container>
        <Grid>
          <ImageCon>
            <Image src={image} />
          </ImageCon>
          <Span>
            <Title>{title}</Title>
            <Category>{category}</Category>
            <Price>
              <small>$</small>
              {price}
            </Price>
            <Rate>
              {rating?.rate} <AiFillStar/>
            </Rate>
            <Count>Stock: {rating?.count}</Count>
            <Desc>{description}</Desc>
          </Span>
        </Grid>
        <Button>
          <NavLink
            to='/products'
          >
            back
          </NavLink>
        </Button>
      </Container>
      <Footer/>
    </>
  )
}

export default SingleProduct;