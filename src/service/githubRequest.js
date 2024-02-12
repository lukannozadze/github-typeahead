import {useEffect} from 'react'
import { useContextProvider } from '@/providers/Provider'
const baseUrl = 'https://api.github.com';
const githubRequest = (searchParam)=>{
   const {setValue,setIsLoading,setIsError} = useContextProvider();
   useEffect(()=>{
     if(searchParam!==''){                   
       const getData = async () =>{
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(`${baseUrl}/search/users?q=${searchParam}`);
        if(!response.ok){
          setIsError(true)
          setIsLoading(false)
          setValue(null)
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

export default githubRequest;