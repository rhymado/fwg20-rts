import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type authContextType = {
  token: string;
  onAuthStateChanged: (token: string) => void;
};

const authContext = createContext<authContextType>({ token: "", onAuthStateChanged() {} });

export function useAuth() {
  return useContext<authContextType>(authContext);
}

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useLocalStorage<string>("", "token");

  const onAuthStateChanged = (token: string) => {
    setToken(token);
  };

  return <authContext.Provider value={{ token, onAuthStateChanged }}>{children}</authContext.Provider>;
}
