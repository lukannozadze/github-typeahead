import {useState,useEffect,useRef} from 'react'

const useMakeRequest = (url,searchParam)=>{
  const [data,setData] = useState([])
  useEffect(()=>{
    if(searchParam!==''){
      const getData = async () =>{
        const response = await fetch(url+searchParam);
        if(!response.ok){
          throw new Error('Something Went Wrong');
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      }
      getData();
    }
    
  },[searchParam])
  return data;
}

export default useMakeRequest;