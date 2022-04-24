import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Globalstyle, LightTheme, DarkTheme } from './styles/Globalstyle';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Error from './pages/Error';
import { AppProvider } from './context';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark'): setTheme('light') ;
  }

  return (
    <>
    <ThemeProvider
      theme={theme === 'light' ? LightTheme : DarkTheme}
    >
      <AppProvider>
      <Globalstyle />
      <Announcement/>
      <Navbar 
        themeToggle={themeToggle}
        theme={theme}
      />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route 
          path='/products'
          element={<Products />}
        />
        <Route
          path='/products/product/:id'
          element={<SingleProduct />}
        />
        <Route
          path='/carts'
          element={<Cart/>}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
      </AppProvider>
    </ThemeProvider>
    </>
  )
}

export default App;