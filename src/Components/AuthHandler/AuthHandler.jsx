import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Sprawdź, czy token istnieje w localStorage
    if (token) {
      try {
        // Dekoduj token i uzyskaj rolę
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.userDetails.role;
        // Ustaw stan isAdmin na podstawie roli
        setIsAdmin(userRole === 'ADMIN');
        console.log("token", isAdmin)
      } catch (error) {
        // Obsłuż błąd dekodowania tokenu
      }
    }
  }, [token]);

  const handleLogout = () => {
    // Usuń token z localStorage
    localStorage.removeItem('token');
    // Zresetuj token w stanie komponentu
    setToken(null);
    setTimeout(() => {
      window.location.href = "/"
    }, 300);
  };

  return (
    <AuthContext.Provider value={{ token, isAdmin, setToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
