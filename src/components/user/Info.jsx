import { useContextProvider } from '@/providers/Provider';
import { useLocation } from 'react-router-dom'
import { Button } from '../ui/button';
export default function Info() {

    const {value} = useContextProvider();
    const location = useLocation();
    const pathname = location.pathname.slice(1);
    const [activeUser] = value.items.filter(user=>user.login===pathname);
   
    console.log(activeUser);

  return (
    <div className='flex flex-col gap-8 pl-16 pt-5'>
        <div className='flex items-center gap-10  font-mono'>
         <img className='w-40 h-40 rounded-full' src={activeUser.avatar_url}/>
         <div className='flex flex-col gap-4' >
         <h1 className='text-white font-bold text-[32px] leading-[24px]'>{activeUser.login}</h1>
         <p className='text-[#1079F9] '>{activeUser.id}</p>
         <p className='text-[#1079F9]'>Score:{activeUser.score}</p>
         </div>
         
    
        </div>
        <a className='w-40' href={activeUser.html_url}><Button>Visit Github Profile</Button></a>
        <a className='w-40' href={activeUser.url}><Button variant='ghost' className='bg-[#60ABFF] text-bold text-white text-base'>Personal Info</Button></a>
    </div>
  )
}
