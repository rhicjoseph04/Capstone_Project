import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  return (
    <MyContext.Provider value={{ loading, toggleLoading }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext; // Default export the context
export { MyProvider, useMyContext };






