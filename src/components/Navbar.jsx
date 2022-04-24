import React,{useState, useEffect} from 'react';
import {BsHandbag} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { Container, Wrap, Left, Right, Logo, MenuItem } from '../styles/Navbar_styled';
import {FiSun, FiMoon} from 'react-icons/fi'

function Navbar({themeToggle, theme}) {
    const [nav, setNav] = useState(false);
    const {cartItems} = useGlobalContext();

    const Control = () => {
        if(window.scrollY > 120) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', Control);
        return () => {
            window.removeEventListener('scroll', Control)
        }
    },[]);

  return (
    <Container nav={nav} >
        <Wrap>
            <Left>
                <Logo>
                    <NavLink
                        to='/'
                    >
                        shopshop
                    </NavLink>
                </Logo>
            </Left>
            <Right>
                <MenuItem>
                    <button onClick={themeToggle}>
                        {theme === 'light' ? <FiSun/> : <FiMoon/>}
                    </button>
                </MenuItem>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <NavLink
                        to='/carts'
                    >
                        <BsHandbag/>
                        {cartItems.length > 0 && (
                            <small>
                                {cartItems.length}
                            </small>
                        )}
                    </NavLink>
                </MenuItem>
            </Right>
        </Wrap>
    </Container>
  )
}

export default Navbar;