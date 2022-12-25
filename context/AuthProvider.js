import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [auth, setAuth] = useState({});
  let [cart, setCart] = useState([]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
