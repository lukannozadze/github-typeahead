import { useContextProvider } from "@/providers/Provider";

const Pagination = () =>{
  const { pageNumber,setCurrentPage,currentPage} = useContextProvider();
  const roundedPagesQuantity = Math.round(pageNumber);
  const pagesArr = [];
  
  if(pageNumber!==null){
    for(let i =0;i<roundedPagesQuantity; i++){
        pagesArr.push(i+1);
    }
  }

    return <div className="flex gap-2 ">
        {pagesArr.map((index)=>{
            return <button onClick={()=>{
              setCurrentPage(index);
            }} className={` ${currentPage===index?'bg-blue-500':'bg-white'} w-5 border-2 border-gray-800 hover:bg-blue-500`} key={index}>{index}</button>
        })}
        </div>
}
export default Pagination;