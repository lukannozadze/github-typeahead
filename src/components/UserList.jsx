import { useContextProvider } from '@/providers/Provider';
import { useEffect } from 'react';
const UserList = ({value})=> {
  const {currentPage,setPageNumber} = useContextProvider();
   const  usersPerPage = 5;
   const lastPostIndex = currentPage * usersPerPage;
   const firstPostIndex = lastPostIndex - usersPerPage;
   //
   const filteredUsers = value?.items.slice(firstPostIndex,lastPostIndex);
   
  useEffect(()=>{
   setPageNumber(value?.items.length / usersPerPage);
  },[value])

  return (
    <ul className='flex flex-col gap-8'>
     {filteredUsers?.map((user)=>{
     return <li key={user.id}>
      <div className='bg-[#1E2A47] rounded-md px-4 py-4 max-w-[700px] min-w-[500px]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-white font-bold'>{user.login}</h2>
          <img className='w-20 h-20 rounded-full' src={user.avatar_url}/>
        </div>
        <a className='text-gray-500  hover:text-blue-400 text-md' href={user.url}>{user.url}</a>
      </div>
      </li>     
     })}
    </ul>
  )
}

export default UserList;