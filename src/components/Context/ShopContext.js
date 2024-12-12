import React, { createContext } from 'react'
import { useContext } from 'react'
import all_product from '../Asserts/all_product'
import  { useState } from 'react';
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
const [cartValue, setCartValue] = useState([]);
 const contextvalue=all_product;
 return(
  <>
  <ShopContext.Provider value={contextvalue}>
    {props.children}
  </ShopContext.Provider>
  </>
 )
}

export default ShopContextProvider
