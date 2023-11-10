// context.js

import React, { createContext, useState } from 'react';

// Create a context with a default value (optional)
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [cartData, setCartData] = useState("hel");
  const [addData, setAddData] = useState([]);

  const info = {
    cartData,
    setCartData,
    addData,
    setAddData
}
  return (
    <MyContext.Provider value={info}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
