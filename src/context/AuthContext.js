import { createContext, useContext, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ME_QUERY } from "@/graphql/queries/me";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [fetchMe, { data }] = useLazyQuery(ME_QUERY);

  useEffect(() => {
    const token = localStorage.getItem("GUNCELGIRISLER_accessToken");
    if (token) {
      fetchMe();
    }
  }, [fetchMe]);

  useEffect(() => {
    if (data && data.me) {
      setIsAuthenticated(true);
      setUser(data.me);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [data]);

  const login = (token) => {
    localStorage.setItem("GUNCELGIRISLER_accessToken", token);
    fetchMe();
    router.push("/admin");
  };

  const logout = () => {
    localStorage.removeItem("GUNCELGIRISLER_accessToken");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
