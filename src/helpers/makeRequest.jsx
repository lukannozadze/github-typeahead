import {useEffect} from 'react'
import { useContextProvider } from '@/providers/Provider'
const makeRequest = (url,searchParam)=>{
   const {setValue,setIsLoading,setIsError,setCurrentPage} = useContextProvider();
   useEffect(()=>{
     if(searchParam!==''){                   
       const getData = async () =>{
        setIsLoading(true);
        const response = await fetch(url+searchParam);
        if(!response.ok){
          setIsError(true)
          setIsLoading(false)
          setCurrentPage(1);
          throw new Error('Something Went Wrong');
        }
        const fetchedData = await response.json();
         setValue(fetchedData);
         setIsLoading(false);
      }
      getData();
    }
    
  },[searchParam])
}

export default makeRequest;