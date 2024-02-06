import {useEffect,useRef} from 'react'
import { useContextProvider } from '@/providers/Provider'
const makeRequest = (url,searchParam)=>{
   const {setValue,setIsLoading} = useContextProvider();
   useEffect(()=>{
     if(searchParam!==''){
       const getData = async () =>{
        setIsLoading(true);
        const response = await fetch(url+searchParam);
        if(!response.ok){
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