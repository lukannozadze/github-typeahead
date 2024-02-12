import { useEffect,useState,memo } from "react"

const useDebounce = (search,delay=500) =>{
  const [debouncedValue,setDebouncedValue] = useState('');
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () =>{
      clearTimeout(timeout);
    }
  },[search])
  return debouncedValue;
}

export default useDebounce;