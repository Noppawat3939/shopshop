import React from 'react';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Slider/>
        <Categories/>
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home