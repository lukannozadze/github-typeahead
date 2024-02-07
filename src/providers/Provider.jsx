import {createContext,useContext,useState} from "react"
const Context = createContext()

 const ContextProvider = ({children}) =>{
  const [value,setValue] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [pageNumber,setPageNumber] = useState(0);
  const contextValue = {
    value,
    setValue,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    currentPage,
    setCurrentPage,
    pageNumber,
    setPageNumber
  }

 return  <Context.Provider value={contextValue}>
  {children}
 </Context.Provider>
}

export default ContextProvider;

export const useContextProvider = () =>{
 const context = useContext(Context);

 if(Object.keys(context).length===0){
  throw new Error('UseContextProvider must be within ContextProvider');
 }
 return context;
}