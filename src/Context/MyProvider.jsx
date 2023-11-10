// context.js

import React, { createContext, useState } from 'react';

// Create a context with a default value (optional)
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [cartData, setCartData] = useState("hello");

  const info = {
    cartData, setCartData
}
  return (
    <MyContext.Provider value={info}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
