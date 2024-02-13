import UserListPage from "./components/home/UserListPage";
import UserDetail from "./components/user/UserDetail";
import ContextProvider from "./providers/Provider";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={ <UserListPage />}/>
       <Route  path="/:user" element={<UserDetail/>} />
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
