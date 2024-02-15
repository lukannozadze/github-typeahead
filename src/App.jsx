import UserListPage from "./components/home/UserListPage";
import ContextProvider from "./providers/Provider";
import { Routes,Route } from "react-router-dom";
import {lazy, Suspense} from 'react'
import { Icons } from "./components/ui/icons";
const LazyUserDetail = lazy(()=>import('./components/user/UserDetail'))
function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={ <UserListPage />}/>
       <Route  path="/:user" element={<Suspense fallback={<div className="w-full flex justify-center"><Icons.spinner  className="h-12 w-12 animate-spin"></Icons.spinner></div>}><LazyUserDetail/></Suspense>} />
      </Routes>
    </>
  );
}

const WithProvider = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};
export default WithProvider;
