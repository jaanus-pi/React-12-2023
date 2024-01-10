// MyContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

// Create a provider component
const AuthContextProvider = ({ children }) => {
  // Define your state or any data you want to share
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") !== null);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };