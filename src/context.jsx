import React,{useContext, useState, useEffect, createContext, useReducer} from 'react';
import reducer from './reducer';

export const AppContext = createContext();

const initialState = {
  cartItems: [],
}

export const AppProvider = ({children}) => {

    const URL = 'https://fakestoreapi.com/products'

    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listItem, setListItem] = useState(true);
    const [dataFilter, setDataFilter] = useState([]);
  
  const fetchProducts = async() => {
    const resp = await fetch(URL);
    const data = await resp.json();
    setDataFilter(data);
    setLoading(false);

    if(data) {
      setAllProduct(data);
    }
  }

  useEffect(() => {
    fetchProducts()
  },[])

  const allCategories = ['all', ...new Set(dataFilter.map((item)=> item.category))]

  const filterItems = (category) => {
    if(category === 'all') {
      setAllProduct(dataFilter);
      return;
    }
    const newItem = dataFilter.filter((item) => item.category === category)
    setAllProduct(newItem);
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({type: 'ADD_ITEM', payload: item});
  }

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload: id});
  }

  useEffect(() => {

  },[state.basket])

    return(
        <AppContext.Provider value={
          {
            allProduct,
            loading,
            setLoading,
            allCategories,
            filterItems,
            listItem,
            setListItem,

            ...state,
            addItem,
            removeItem
          }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}