import { useContextProvider } from '@/providers/Provider';
import React from 'react'
import { useLocation } from 'react-router-dom'
export default function UserDetail() {
   const {value} = useContextProvider();
   const location = useLocation();
   const pathname = location.pathname.slice(1);
   const [activeUser] = value.items.filter(user=>user.login===pathname);
  
  console.log(activeUser);
  return (
    <div>UserDetail</div>
  )
}
