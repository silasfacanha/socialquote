import { useMutation } from "@tanstack/react-query";
import { ReactNode, useMemo } from "react";
import React, { createContext, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  cookies:
    | {
        userID: string | undefined;
        token: string | undefined;
      }
    | undefined;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  cookies: undefined,
  login: (username: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();
  const loginMutation = useMutation(
    (data: any) => loginUser(data.username, data.password),
    {
      onSuccess: (data) => {
        const idToStore = data.data.userId;
        setCookies("userID", idToStore);
        setCookies("token", data.data.token);
        navigate("/");
      },
    }
  );

  const login = (username: string, password: string) => {
    loginMutation.mutate({ username, password });
  };

  const logout = () => {
    removeCookie("userID");
    removeCookie("token");
    navigate("/auth");
  };

  const value = {
    cookies: { userID: cookies.userID, token: cookies.token },
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
