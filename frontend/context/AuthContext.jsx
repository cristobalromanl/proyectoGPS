import { createContext, useContext, useEffect, useState } from "react";
import { signIn, signOut, verifyAuth } from "../services/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const res = await signIn(email, password);

      setUser(res.user);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error("Error al iniciar sesión");
    }
  };

  const logout = async () => {
    try {
      await signOut();

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      throw new Error("Error al cerrar sesión");
    }
  };

  useEffect(() => {
    verifyAuth()
      .then((res) => {
        setUser(res.user);
        setIsAuthenticated(true);
      })
      .finally(() => setLoading(false))
      .catch((_error) => {
        setIsAuthenticated(false);
        setUser(null);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
