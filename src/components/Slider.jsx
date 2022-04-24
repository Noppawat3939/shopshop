import React,{useState} from 'react';
import { SlideData } from '../data/data';
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Container, Arrow, Wrapper, Slide, ImgContainer, Image, Title, Desc, InfoContainer, Button } from '../styles/Slide_styled';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slidedt, setSlidedt] = useState(SlideData);

    const handleClick = (direct) => {
        if(direct === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slidedt.length -1)
        }
        else {
            setSlideIndex(slideIndex < slidedt.length-1 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direct='left' onClick={() => handleClick('left')}>
            <MdArrowBackIos/>
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
            {slidedt.map((item, idx) => {
                return(
                    <Slide key={idx*2} >
                        <ImgContainer>
                            <Image src={item.image} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>
                              <NavLink to='products'>shop now</NavLink>
                            </Button>
                        </InfoContainer>
                    </Slide>
                )
            })}
        </Wrapper>
        <Arrow direct='right' onClick={() => handleClick('right')}>
            <MdArrowForwardIos/>
        </Arrow>
    </Container>
  )
}

export default Slider;