import { createContext, useContext, useState } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usersPerPage,setUsersPerPage] = useState(5);
  const contextValue = {
    value,
    setValue,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    usersPerPage,
    setUsersPerPage
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useContextProvider = () => {
  const context = useContext(Context);

  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
};
